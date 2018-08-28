const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./models/User');


router.get('/profiles', (req, res) => {
  User.find({}, (err, profiles) => {
    if (err)
      res.send(err);
    res.json(profiles);
  })
});

module.exports = router;