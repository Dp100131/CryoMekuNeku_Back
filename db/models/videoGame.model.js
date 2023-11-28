const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'video_game';

const VideoGameSchema = {
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
  score: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  releaseDate: {
    allowNull: false,
    type: DataTypes.DATE,
    unique: true,
    field: 'release_date',
    defaultValue: Sequelize.NOW
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  url: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class VideoGame extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'VideoGame',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, VideoGameSchema, VideoGame}