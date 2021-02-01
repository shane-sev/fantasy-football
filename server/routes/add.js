const router = require('express').Router();
let userLoginCollection = require('../models/userLogin.model')
let userTeamsCollection = require('../models/userTeams.model')
let leaguesCollection = require('../models/leagues.model')

//handle the post request from client to the server, server sends new entry to database, database rends response to server, server sends response to client
router.route('/userLoginSchema')
    .post((req, res) => {
        const person = new userLoginCollection(req.body); //create a generic instance of the userLoginCollection model
        person.save() //the instance can be saved to the MongoDB database, returns a promise which calls the callback below
            .then(item => res.json(item)) //send the response from the server back to the client from the database
            .catch(err => res.json(err));
    });

router.route('/userTeamsSchema')
    .post((req, res) => {
      const person = new userTeamsCollection(req.body);
      person.save()
          .then(item => res.json(item))
          .catch(err => res.json(err));
    });

router.route('/leaguesSchema')
    .post((req, res) => {
      const person = new leaguesCollection(req.body);
      person.save()
          .then(item => res.json(item))
          .catch(err => res.json(err));
    });

module.exports = router;