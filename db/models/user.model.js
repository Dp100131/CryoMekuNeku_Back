const { Model, DataTypes } = require('sequelize');
const { UserType } = require('./userType.model')

const USER_TABLE = 'users';

const UserSchema = {

  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "user_id"
  },
  userName: {
    type: DataTypes.STRING(100),
    field: "user_name"
  },
  userLastName: {
    type: DataTypes.STRING(100),
    field: "user_lastname"
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
    field: "user_password"
  },
  typeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "type_id",
    references: {
      model: UserType,
      key: 'typeId',
    }
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  balance: {
    allowNull: false,
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },

}

class User extends Model {
  static associate(models) {
    this.belongsTo(models.UserType, {
      foreignKey: 'typeId',
      as: 'userType'
    })
    this.hasMany(models.Cart, {
      as: 'Cart',
      foreignKey: "userId"
    })
    this.hasMany(models.Historical, {
      as: 'Historical',
      foreignKey: "userId"
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