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

router.post('/user', (req, res) => {
  const username = req.body.username;
  User.find({username: username}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  })
})

module.exports = router;