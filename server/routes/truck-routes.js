'use strict';

var DB = require('../../db-models/db_config')();

var bodyParser = require('body-parser');
var eatAuth = require('../lib/eat_auth');

module.exports = function(app, appSecret) {
  app.use(bodyParser.json());

  app.get('/trucks/:id', eatAuth(appSecret), function(req, res) {
    var truckID = parseInt(req.id);
    DB.find(truckID).then(function(truck) {
      res.send(truck);
    }).catch(function(error) {
      console.log('A request was unable to find truck or it was a bad request.');
      res.send({'msg': 'Unable to find truck.'});
    });
  });
};