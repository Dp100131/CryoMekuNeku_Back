const { User, UserSchema } = require('./user.model');
const { UserType, UserTypeSchema } = require('./userType.model');
const { UserVideoGame, UserVideoGameSchema } = require('./userVideoGames.model');
const { VideoGame, VideoGameSchema } = require('./videoGame.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  UserType.init(UserTypeSchema, UserType.config(sequelize));
  UserVideoGame.init(UserVideoGameSchema, UserVideoGame.config(sequelize));
  VideoGame.init(VideoGameSchema, VideoGame.config(sequelize));
}

module.exports = { setupModels };