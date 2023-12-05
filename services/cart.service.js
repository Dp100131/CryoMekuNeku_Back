const boom = require('@hapi/boom');
const sequelize  = require('./../Lib/sequelize');
const { models }  = require('./../Lib/sequelize');

class CartService {

  async create(data) {
    const newCart = await models.Cart.create(data);
    return newCart;
  }

  async find() {
    const allProductosAndUsersInCart = await models.Cart.findAll();
    return allProductosAndUsersInCart;
  }

  async findByUser(userId) {
    const query = `SELECT cart.*, videogame.* FROM cart JOIN videogame ON cart.game_Id = videogame.game_id WHERE cart.user_Id = ${userId}`
    const videoGames = await sequelize.query(query);
    /* const videoGames = await models.Cart.findAll({
      where:{
        userId: userId
      },
      include: ['videoGames']
    }) */
    return videoGames;
  }

  async delete(id) {
    const product = await models.Cart.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    await product.destroy();
    return { id };
  }

}

module.exports = CartService;