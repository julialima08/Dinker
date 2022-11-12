'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.User, {
        as: 'matchers',
        through: models.User_match,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.User, {
        as: 'matchees',
        through: models.User_match,
        foreignKey: 'matchId'
      })
      User.hasMany(models.Post, {
        as: 'creator',
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      skills: DataTypes.ARRAY(DataTypes.STRING),
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      avatar: DataTypes.STRING,
      socialLinks: DataTypes.ARRAY(DataTypes.STRING),
      projects: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
