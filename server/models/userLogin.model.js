const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  leagues: {type: [String], required: false},
}, {collection: 'userLogin'})

const userLoginCollection = mongoose.model('userLogin', userLoginSchema);

module.exports = userLoginCollection;