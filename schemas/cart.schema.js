/**
 * id
  type: DataTypes.INTEGER,
  user_id
  type: DataTypes.INTEGER,
  game_id
  type: DataTypes.INTEGER,
 *
 */
const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const gameId = Joi.number().integer();

const createCartSchema = Joi.object({
  userId: userId.required(),
  gameId: gameId.required()
});
const updateCartSchema = Joi.object({
  id: id.required(),
  userId: userId,
  gameId: gameId
})
const getCartSchema = Joi.object({
  userId: userId.required()
})

module.exports = { createCartSchema, updateCartSchema, getCartSchema}