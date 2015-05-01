'use strict';

var DB = require('../../db-models/db_config')();

var bodyParser = require('body-parser');
var eatAuth = require('../lib/eat_auth');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.get('/trucks', /*eatAuth(appSecret),*/ function(req, res) {
    DB.trucks.findAll().then(function(truck) {
      res.send(truck);
    }).catch(function(error) {
      res.send({'msg': 'Unable to find truck.'});
    });
  });
};
