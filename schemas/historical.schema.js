/**
 * id
  type: DataTypes.INTEGER,
  userId
  type: DataTypes.INTEGER,
  gameId
  type: DataTypes.INTEGER,
  purchaseDate
  type: DataTypes.DATE,
 *
 */
const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const gameId = Joi.number().integer();
const purchaseDate = Joi.date();

const createHistoricalSchema = Joi.object({
  userId: userId.required(),
  gameId: gameId.required(),
  purchaseDate: purchaseDate
});
const updateHistoricalSchema = Joi.object({
  id: id.required(),
  userId: userId,
  gameId: gameId
})
const getHistoricalSchema = Joi.object({
  userId: userId.required()
})

module.exports = { createHistoricalSchema, updateHistoricalSchema, getHistoricalSchema}