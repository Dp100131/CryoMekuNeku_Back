const { Model, DataTypes } = require('sequelize');

const USER_TYPE_TABLE = 'user_type';

const UserTypeSchema = {
  typeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "type_id",
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
  }
};

class UserType extends Model {

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