const { Model, DataTypes } = require('sequelize');
const USER_TABLE = 'user_video_game';
const UserVideoGameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idUser: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_user'
  },
  idVideoGame: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_video_game'
  }
}
class UserVideoGame extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'UserVideoGame',
      timestamps: false
    }
  }
} 
module.exports = { USER_TABLE, UserVideoGameSchema, UserVideoGame}