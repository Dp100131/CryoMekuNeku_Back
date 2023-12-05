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
  realiseDate: realiseDate,
  price: price.required(),
  url: URL.required(),
  description: description

});
const updateVideoGameSchema = Joi.object({
  gameName: gameName,
  score: score,
  realiseDate: realiseDate,
  price: price,
  url: URL,
  description: description
})
const getVideoGameSchema = Joi.object({
  gameId: gameId.required()
})

module.exports = { createVideoGameSchema, updateVideoGameSchema, getVideoGameSchema}