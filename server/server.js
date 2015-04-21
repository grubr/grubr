var express = require('express');
var db = require('../db-models/db_config')();

var app = express();

app.listen(process.env.PORT || 3000, function() {
  console.log('server running');
});
