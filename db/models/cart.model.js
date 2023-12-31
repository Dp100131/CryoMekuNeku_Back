const { Model, DataTypes } = require('sequelize');
const { User } = require('./user.model');
const { VideoGame } = require('./videoGame.model')

const CART_TABLE = 'cart';


const CartSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      model: User,
      key: 'userId',
    }
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "game_id",
    references: {
      model: VideoGame,
      key: 'gameId',
    }
  }
}

class Cart extends Model {  
  static associate(models){
    this.hasMany(models.VideoGame,{
      as: 'videoGames',
      foreignKey: 'gameId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_TABLE,
      modelName: 'Cart',
      timestamps: false
    }
  }
}


module.exports = { CART_TABLE, CartSchema, Cart}