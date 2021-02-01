const router = require('express').Router();
let userLoginCollection = require('../models/userLogin.model')

router.route('/test')
    .get((req, res) => {
      userLoginCollection.findById('5ff0e49dc81e41bb1a026d13')
          .then((user) => {return res.json(user)})

    });

module.exports = router;