const Joi = require('joi');
const id = Joi.number().integer();
const name = Joi.string();
const score = Joi.number();
const releaseDate = Joi.date();
const price = Joi.number();
const url = Joi.string();
const createVideoGameSchema=Joi.object({
  name:name.required(),
  score:score.required(),
  releaseDate:releaseDate.required(),
  price:price.required(),
  url:url.required()
});
const updateVideoGameSchema=Joi.object({
  name:name,
  score:score,
  releaseDate:releaseDate,
  price:price,
  url:url
});
const getVideoGameSchema=Joi.object({
  id:id.required(),
});
module.exports = { createVideoGameSchema, updateVideoGameSchema, getVideoGameSchema}
/*
id
type: DataTypes.INTEGER
name
type: DataTypes.STRING
score
type: DataTypes.FLOAT
releaseDate
type: DataTypes.DATE,
price
type: DataTypes.FLOAT
url
type: DataTypes.STRING
*/