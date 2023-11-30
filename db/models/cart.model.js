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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    }
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: VideoGame,
      key: 'game_id',
    }
  }
}

class Cart extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    this.belongsToMany(models.VideoGame, {
      foreignKey:'game_id',
      as: 'videoGame'
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