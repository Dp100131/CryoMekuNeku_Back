/**
 * gameId
  type: DataTypes.INTEGER,
  gameName
  type: DataTypes.STRING(50),
  score
  type: DataTypes.FLOAT,
  realiseDate
  type: DataTypes.DATE,
  price
  type: DataTypes.FLOAT,
  URL
  type: DataTypes.TEXT,
  description
  type: DataTypes.TEXT,
 */
const Joi = require('joi');

const gameId = Joi.number().integer();
const gameName = Joi.string().max(50);
const score = Joi.number();
const realiseDate = Joi.date();
const price = Joi.number();
const URL = Joi.string();
const description = Joi.string();

const createVideoGameSchema = Joi.object({
  gameName: gameName.required(),
  score: score.required(),
  realiseDate: realiseDate.required(),
  price: price.required(),
  description: description.required()
});
const updateVideoGameSchema = Joi.object({
  gameId: gameId.required(),
  gameName: gameName,
  score: score,
  realiseDate: realiseDate,
  price: price,
  URL: URL,
  description: description
})
const getVideoGameSchema = Joi.object({
  gameId: gameId.required()
})

module.exports = { createVideoGameSchema, updateVideoGameSchema, getVideoGameSchema}