const { Model, DataTypes } = require('sequelize');

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
    type: DataTypes.INTEGER,
    allowNull: false,
  }

}

class User extends Model {
  static associate(models) {console.log(models)}

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