'use strict';

var express = require('express');
var app = express();
var truckRoute = require('./routes/truck-routes');

// var grubrdb = require('../db-models/db_config')();

app.use(express.static(__dirname + '/../build'));

//app.set('appSecret', process.env.SECRET || 'eatme!eatme!eatme!eatme!eatme!');

var mainRouter = express.Router();
truckRoute(mainRouter);

app.use('/api/v1', mainRouter);

app.set('port', process.env.PORT || 3333);

var server = app.listen(app.get('port'), function() {
	console.log('Server listening on port ' + server.address().port);
});
