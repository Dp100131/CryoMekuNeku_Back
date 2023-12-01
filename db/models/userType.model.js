const { Model, DataTypes } = require('sequelize');

const USER_TYPE_TABLE = 'user_type';

const UserTypeSchema = {
  typeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "type_id"
  },
  description: {
    type: DataTypes.TEXT,
  }
};

class UserType extends Model {

  static associate(models) {
  this.hasMany(models.User, {
    foreignKey: "typeId"
  });
  }

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