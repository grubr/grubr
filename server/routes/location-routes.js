'use strict';

var DB = require('../../db-models/db_config')();

var bodyParser = require('body-parser');
var eatAuth = require('../lib/eat_auth');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.get('/locations', /*eatAuth(appSecret),*/ function(req, res) {
    var truckID = parseInt(req.id);
    DB.locations.findAll().then(function(allLocations) {
      res.send(allLocations);
    }).catch(function(error) {
      res.send({'msg': 'Unable to find location.'});
    });
  });
};