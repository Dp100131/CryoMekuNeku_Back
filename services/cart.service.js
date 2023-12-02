const boom = require('@hapi/boom');
const { models } = require('./../Lib/sequelize');

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
    const products = await models.Cart.findAll({
      where:{
        userId: userId
      },
      include:[
        {
          include: ['VideoGame'],
        }
      ]
    })
    return products;
  }

  async delete(data) {
    const product = await models.Cart.findByPk({
      where:{
        userId: data.userId,
        gameId: data.gameId
      }
    });
    if (!product) {
      throw boom.notFound('Product not found');
    }
    await product.destroy();
    return { ...data };
  }

}

module.exports = CartService;