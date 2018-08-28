const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:allthellamas4eva@ds133202.mlab.com:33202/adoptallama');

const mongodb = mongoose.connection;
mongodb.once('open', function(err, res){
  console.log('Mongodb connection open.');
});

module.exports = mongodb;