'use strict';

// ** Insert truck model import here ** (Trucks)

var bodyParser = require('body-parser');
var eatAuth = require('../lib/eat_auth');

module.exports = function(app, appSecret) {
  app.use(bodyParser.json());

  app.get('/trucks/:id', eatAuth(appSecret), function(req, res) {
      // Locate truck here
    });

  });
};