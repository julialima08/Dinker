'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_match.init(
    {
      userId: DataTypes.STRING,
      matchId: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User_match',
      tableName: 'user_matches'
    }
  )
  return User_match
}
