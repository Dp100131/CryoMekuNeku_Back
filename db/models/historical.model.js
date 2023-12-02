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
  purchaseDate: {
    type: DataTypes.DATE,
    default: Sequelize.NOW,
    field: "purchase_date"
  }

}

class Historical extends Model {  
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