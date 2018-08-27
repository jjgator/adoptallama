var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

app.listen(port, () => console.log('Server listening on port ' + port + '.'));

module.exports = app;