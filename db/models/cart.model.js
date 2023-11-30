const { Model, DataTypes } = require('sequelize');

const CART_TABLE = 'cart';

const CartSchema = {
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
  }
}

class Cart extends Model {
  static associate(models) {console.log(models)}

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