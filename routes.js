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
});

router.post('/edit', (req, res) => {
  const doc = {
    username: req.body.username,
    llama_name: req.body.llama_name,
    description: req.body.description,
    img_link: req.body.img_link
  };
  User.update({username: req.body.username}, doc, (err, result) => {
    if (err)
      res.send(err);
    User.find({username: req.body.username}, (err, user) => {
      if (err)
        res.send(err);
      res.json(user);
    })
  });
});

module.exports = router;