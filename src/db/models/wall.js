'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wall = sequelize.define('Wall', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Wall.associate = function(models) {
    Wall.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    }),
    Wall.hasMany(models.Comment, {
      foreignKey: 'wallId',
      as: 'comments'
    })
  };
  return Wall;
};
