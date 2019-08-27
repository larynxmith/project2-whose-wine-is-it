'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    profilepic: DataTypes.TEXT,
    bio: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};