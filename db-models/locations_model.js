var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Location =  sequelize.define('Locations', {
    id:Sequelize.INTEGER,
    date:Sequelize.DATE,
    location:Sequelize.STRING
  });

  return Location;
};
