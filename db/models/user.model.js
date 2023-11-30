const { Model, DataTypes } = require('sequelize');
const { UserType } = require('./userType.model')

const USER_TABLE = 'users';

const UserSchema = {

  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: DataTypes.STRING(100),
  },
  user_lastname: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: UserType,
      key: 'type_id',
    }
  }

}

class User extends Model {
  static associate(models) {
    this.belongsTo(models.UserType, {
      foreignKey: 'type_id',
      as: 'userType'
    })
    this.hasOne(models.Cart, {
      as: 'Cart',
      foreignKey: "user_id"
    })
    this.hasOne(models.Historical, {
      as: 'Historical',
      foreignKey: "user_id"
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User}