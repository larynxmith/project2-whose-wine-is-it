'use strict';
module.exports = (sequelize, DataTypes) => {
  const userlist = sequelize.define('userlist', {
    wine: DataTypes.STRING,
    appellation: DataTypes.STRING,
    region: DataTypes.STRING,
    country: DataTypes.STRING,
    vintage: DataTypes.INTEGER,
    score: DataTypes.FLOAT,
    tasted: DataTypes.BOOLEAN,
    wishlist: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  userlist.associate = function(models) {
    // associations can be defined here

    models.userlist.belongsTo(models.user)
  };
  return userlist;
};