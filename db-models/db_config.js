module.exports = function() {

  require('pg-hstore');
  var Sequelize = require('sequelize');
  var grubrDb = new Sequelize('grubr', null, null, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  // pass in our database into the sequel models
  Truck = require('./trucks_model')(grubrDb);
  Location = require('./locations_model')(grubrDb);

  Truck.sync();
  Location.sync();

  return {
    trucks: Truck,
    locations: Location,
    grubrDb: grubrDb
  };

};
