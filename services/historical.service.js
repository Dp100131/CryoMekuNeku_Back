const { models } = require('./../libs/sequelize');

class HistoricalService {

  async create(data) {
    const newHistorical = await models.Historical.create(data);
    return newHistorical;
  }

  async find() {
    const allProductosAndUsersInHistorical = await models.Historical.findAll();
    return allProductosAndUsersInHistorical;
  }

  async findByUser(userId) {
    const products = await models.Historical.findAll({
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

}

module.exports = HistoricalService;