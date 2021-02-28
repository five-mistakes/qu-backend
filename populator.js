const config = require('./src/utils/config');
const mongoose = require('mongoose');
const Service = require('./src/models/service');
const Facility = require("./src/models/facility");
const services = require('./services.json');
const facilities = require('./facilities.json');
// connect to mongoDB database
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.info('connected to MongoDB server');
    run();
  })
  .catch(error => {
    console.error('Can not to connect to MongoDB '+ error.message);
  });

const run = async () => {
    console.log(process.argv);
    if (process.argv[2] === "service"){
        services.services.forEach(async srv => {
            const fac = await Facility.findOne({name: srv.facility});
            const service = new Service({...srv, facility: fac._id});
            const savedSer = await service.save();
            console.log(savedSer);
            mongoose.connection.close();

        })
    }
    if (process.argv[2] === "facility"){
        await Facility.insertMany(facilities.facilities);
        mongoose.connection.close();
    }
}