'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmail: { msg: "must be a valid email" }
     }
   },
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Wall, {
      foreignKey: 'userId',
      as: 'walls'
    }),
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments'
    })
  };
  return User;
};
