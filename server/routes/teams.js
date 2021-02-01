const router = require('express').Router();
const getUser = require('../util/queries');

let userTeamsCollection = require('../models/userTeams.model');
let userLoginCollection = require('../models/userLogin.model');

//.json() modifies what is in the response that will be sent back to the user
router.route('/add')
    .post((req, res) => {
      const person = new userTeamsCollection(req.body);
      person.save()
          .then(item => res.json(item))
          .catch(err => res.json(err));
    });

router.route('/get')
    .get((req, res) => {
      getUser(req.body.email).then(user => res.json(user));
    });

module.exports = router;