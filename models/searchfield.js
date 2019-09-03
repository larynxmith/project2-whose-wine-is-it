'use strict';
module.exports = (sequelize, DataTypes) => {
  const searchfield = sequelize.define('searchfield', {
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    appellation: DataTypes.STRING
  }, {});
  searchfield.associate = function(models) {
    // associations can be defined here
  };
  return searchfield;
};