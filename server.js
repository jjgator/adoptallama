const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

//connect to database
const mongodb = require('./config/mongodb_config.js');

app.listen(port, () => console.log('Server listening on port ' + port + '.'));

module.exports = app;