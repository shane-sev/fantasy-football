const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTeamsSchema = new Schema({
  teamName: {type: String, required: true},
  players: {type: [String], required: true},
  totalWins: {type: Number, required: true},
  totalLosses: {type: Number, required: true},
  pointsFor: {type: Number, required: true},
  pointsAgainst: {type: Number, required: true},
  owner: {type: mongoose.ObjectId, required: true},
}, {collection: 'userTeams'})

const userTeamsCollection = mongoose.model('userTeams', userTeamsSchema);

module.exports = userTeamsCollection;