'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../build'));

var mainRouter = express.Router();

app.listen(process.env.port || 3333, function() {
  console.log('Server ready for face stuffing on port ' + (process.env.PORT || 3333));
});
