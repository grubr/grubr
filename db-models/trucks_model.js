var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Truck = sequelize.define('Trucks', {
    id:   Sequelize.INTEGER,
    name: Sequelize.STRING,
    type: Sequelize.STRING,
    city: Sequelize.STRING,
    vege: Sequelize.BOOLEAN
  });

  return Truck;
};
