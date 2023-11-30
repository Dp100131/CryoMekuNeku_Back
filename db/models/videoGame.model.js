const { Model, DataTypes, Sequelize } = require('sequelize');

const VIDEO_GAME_TABLE = 'videogame';

const VideoGameSchema = {
  game_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  game_name: {
    type: DataTypes.STRING(50),
  },
  score: {
    type: DataTypes.FLOAT,
  },
  realiseDate: {
    type: DataTypes.DATE,
    default: Sequelize.NOW
  },
  price: {
    type: DataTypes.FLOAT,
  },
  URL: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  }
}

class VideoGame extends Model {
  static associate(models) {console.log(models)}

  static config(sequelize) {
    return {
      sequelize,
      tableName: VIDEO_GAME_TABLE,
      modelName: 'VideoGame',
      timestamps: false
    }
  }
}


module.exports = { VIDEO_GAME_TABLE, VideoGameSchema, VideoGame}