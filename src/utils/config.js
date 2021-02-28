require('dotenv').config({ path: '.env' });

const PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let email = process.env.email;
let password = process.env.password;
if(process.env.NODE_ENV === 'test'){
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  PORT, MONGODB_URI, email, password
};