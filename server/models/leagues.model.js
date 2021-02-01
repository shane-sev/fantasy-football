const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaguesSchema = new Schema({
  leagueName: {type: String, required: true},
  teams: {type: [mongoose.ObjectId], required: true},
  users: {type: [mongoose.ObjectId], required: true},
  commissioner: {type: mongoose.ObjectId, required: true},
}, {collection: 'leagues'})

const leaguesCollection = mongoose.model('leagues', leaguesSchema);

module.exports = leaguesCollection;