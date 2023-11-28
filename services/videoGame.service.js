const boom = require('@hapi/boom');
const { models } = require('../Lib/sequelize');

class VideoGameService {
  constructor() {  }

  async create(data) {
    const newUser = await models.VideoGame.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.VideoGame.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.VideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.VideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.VideoGame.findByPk(id);
    if(!user){
      throw boom.notFound('User not found.')
    }
    await user.destroy();
    return { id };
  }
}

module.exports = VideoGameService;