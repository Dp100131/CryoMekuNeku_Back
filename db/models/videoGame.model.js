const { Model, DataTypes, Sequelize } = require('sequelize');

const VIDEO_GAME_TABLE = 'videogame';

const VideoGameSchema = {
  gameId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "game_id"
  },
  gameName: {
    type: DataTypes.STRING(50),
    field: "game_name"
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
  url: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  }
}

class VideoGame extends Model {
  static associate(models) {
    this.belongsToMany(models.User, {
      through: models.Cart,
      foreignKey:'gameId',
      otherKey:'userId'
    })
    this.belongsToMany(models.User, {
      through: models.Historical,
      foreignKey:'gameId',
      otherKey:'userId'
    })
  }

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