var locations =  sequelize.define('Locations', {
  id:Sequelize.INTEGER,
  date:Sequelize.DATE,
  location:Sequelize.STRING
});
