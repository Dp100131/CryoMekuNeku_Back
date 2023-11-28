const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'user_type';

const UserTypeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING.length(512)
  }
}

class UserType extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'UserType',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserTypeSchema, UserType}