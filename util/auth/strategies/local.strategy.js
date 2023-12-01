const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const {comparePassword} = require('./../../security/password.security');

const UserService = require('./../../../services/user.service.js');
const service = new UserService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  },
  async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if(!user){
      done(boom.unauthorized(), false);
    }
    const isMacth = await comparePassword(password, user.password);
    if(!isMacth){
      done(boom.unauthorized(), false);
    }
    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;