const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'user';

const UserSchema = {
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
  lastname: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  userType: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'user_type',
    defaultValue: 'Usuario'
  },
  balance: {
    allowNull: false,
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
}

class User extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User}