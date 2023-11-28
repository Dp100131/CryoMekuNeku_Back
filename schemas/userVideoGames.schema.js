const Joi = require('joi');
const id = Joi.number().integer();
const idUser = Joi.number().integer();
const idVideoGame = Joi.number().integer();
const createUserVideoGamesSchema=Joi.object({
  idUser:idUser.required(),
  idVideoGame:idVideoGame.required()
});
const updateUserVideoGamesSchema=Joi.object({
  idUser:idUser,
  idVideoGame:idVideoGame
});
const getUserVideoGamesSchema=Joi.object({
  id:id.required(),
});
module.exports = {createUserVideoGamesSchema, updateUserVideoGamesSchema, getUserVideoGamesSchema}
/*
id
type: DataTypes.INTEGER
idUser
type: DataTypes.INTEGER,
idVideoGame
type: DataTypes.INTEGER,
*/