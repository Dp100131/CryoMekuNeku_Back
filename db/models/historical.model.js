const { Model, DataTypes, Sequelize } = require('sequelize');

const HISTORICAL_TABLE = 'historical';

const HistoricalSchema = {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  game_id: {
    type: DataTypes.INTEGER,
  },
  purchase_date: {
    type: DataTypes.DATE,
    default: Sequelize.NOW
  }

}

class Historical extends Model {
  static associate(models) {console.log(models)}

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