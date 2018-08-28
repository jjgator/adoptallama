const express = require('express');
const router = require('./routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

//connect to database
const mongodb = require('./config/mongodb_config.js');

app.use('/', router);

app.listen(port, () => console.log('Server listening on port ' + port + '.'));

module.exports = app;