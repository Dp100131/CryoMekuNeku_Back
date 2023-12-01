const boom = require('@hapi/boom');

const { models } = require('../Lib/sequelize');

class VideoGameService {
  constructor() {}

  async create(data) {
    const newVideoGame = await models.VideoGame.create(data);
    return newVideoGame;
  }

  async find() {
    const VideoGames = await models.VideoGame.findAll();
    return VideoGames;
  }

  async findOne(id) {
    const VideoGame = await models.VideoGame.findByPk(id);
    if (!VideoGame) {
      throw boom.notFound('VideoGame not found');
    }
    return VideoGame;
  }

  async update(id, changes) {
    const VideoGame = await models.VideoGame.findByPk(id);
    if (!VideoGame) {
      throw boom.notFound('VideoGame not found');
    }
    const VideoGameUpdate = await VideoGame.update(changes);
    return VideoGameUpdate;
  }

  async delete(id) {
    const VideoGame = await models.VideoGame.findByPk(id);
    if (!VideoGame) {
      throw boom.notFound('VideoGame not found');
    }
    await VideoGame.destroy();
    return { id };
  }

}

module.exports = VideoGameService;