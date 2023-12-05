const boom = require('@hapi/boom');
const { models } = require('../Lib/sequelize');

class UserVideoGameService {
  constructor() {  }

  async create(data) {
    const newUser = await models.UserVideoGame.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.UserVideoGame.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.UserVideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.UserVideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.UserVideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    await user.destroy();
    return { id };
  }
}

module.exports = UserVideoGameService;