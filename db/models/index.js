const { User, UserSchema} = require('./user.model');
const { UserType, UserTypeSchema} = require('./userType.model');
const { Cart, CartSchema} = require('./cart.model');
const { Historical, HistoricalSchema} = require('./historical.model');
const { VideoGame, VideoGameSchema} = require('./videoGame.model');

function setupModels(sequelize) {

  UserType.init(UserTypeSchema, UserType.config(sequelize));
  VideoGame.init(VideoGameSchema, VideoGame.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Cart.init(CartSchema, Cart.config(sequelize));
  Historical.init(HistoricalSchema, Historical.config(sequelize));

  UserType.associate(sequelize.models);
  VideoGame.associate(sequelize.models);
  User.associate(sequelize.models); 
}

module.exports = { setupModels };