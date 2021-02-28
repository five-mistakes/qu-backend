const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const mWare = require('./utils/middlewares');
const quRouter = require('./routes');
const app = express();
const path = require('path');

app.use(helmet());
// to log the api requests in console
morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// enabling cors, response in json, and indentation of json
app.use(cors());
app.use(express.json());
app.set('json spaces', 2);
app.use(compression());

// disable caching
app.disable('etag');

app.use(express.static(path.join(process.cwd(), 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});
app.get('/ping', (_req, res) => {
  res.send('it is up and running!');
});

// register routers
app.use('/api', quRouter);

// register middlewares
app.use(mWare.unknownEndpoint);
app.use(mWare.errorHandler);

module.exports = app;