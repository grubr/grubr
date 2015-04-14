module.exports = function() {
  require('pg-hstore');

  var Sequelize = require('sequelize');
  var sequelize = new Sequelize('grubr', null, null, {
    host: 'localhost',
    dialect: 'postgres'
  });

  var trucks = require('./trucks');
  var location = require('./location');

};
