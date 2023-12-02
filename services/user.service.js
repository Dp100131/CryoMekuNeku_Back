const boom = require('@hapi/boom');

const { models } = require('../Lib/sequelize');
const { hashPassword } = require('../util/security/password.security');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await hashPassword(data.password);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findByEmail(email) {
    const userEmail = await models.User.findOne({
      where: {email}
    });
    if(!userEmail){
      throw boom.notFound('User not found');
    }
    return userEmail;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    delete user.dataValues.password;
    return user;
  }

  async update(userId, changes) {
    const user = await models.User.findByPk(userId);
    if (!user) {
      throw boom.notFound('User not found');
    }
    if(changes.balance){ 
      const balanceW = changes.balance + user.balance;
      changes = { balance: balanceW};
    }
    const userUpdate = await user.update(changes);
    return userUpdate;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;