'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      avatar: DataTypes.STRING,
      socialLinks: DataTypes.ARRAY(DataTypes.STRING),
      projects: DataTypes.ARRAY(DataTypes.STRING),
      posts: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      matches: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        references: {
          model: 'user_matches',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
