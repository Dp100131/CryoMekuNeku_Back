const { Model, DataTypes, Sequelize } = require('sequelize');

const HISTORICAL_TABLE = 'historical';

const HistoricalSchema = {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id"
  },
  gameId: {
    type: DataTypes.INTEGER,
    field: "game_id"
  },
  purchase_date: {
    type: DataTypes.DATE,
    default: Sequelize.NOW
  }

}

class Historical extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
    this.belongsToMany(models.VideoGame, {
      foreignKey:'gameId',
      as: 'videoGame'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HISTORICAL_TABLE,
      modelName: 'Historical',
      timestamps: false
    }
  }
}


module.exports = { HISTORICAL_TABLE, HistoricalSchema, Historical}