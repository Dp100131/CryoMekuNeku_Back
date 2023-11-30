const { Model, DataTypes } = require('sequelize');

const USER_TYPE_TABLE = 'user_type';

const UserTypeSchema = {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
  }
};

class UserType extends Model {

  static associate(models) {console.log(models)}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TYPE_TABLE,
      modelName: 'UserType',
      timestamps: false
    }
  }

}


module.exports = { USER_TYPE_TABLE, UserTypeSchema, UserType}