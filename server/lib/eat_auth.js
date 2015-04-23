'use strict';

var eat = require('eat');

module.exports = function (appSecret) {
  return function (request, response, next) {
    var token = request.headers.token || request.body.token;
    if (!token) return response.status(403).send({msg: 'could not authenticate'});

    eat.decode(token, appSecret, function (err, decoded) {
      if (err) return response.status(403).send({msg: 'could not authenticate'});

      next();
    });
  };
};