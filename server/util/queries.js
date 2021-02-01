let userLoginCollection = require('../models/userLogin.model');

function getUser(email) {
  return userLoginCollection.findOne({email: email}).exec();
}

module.exports = getUser;
