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
const userId = 

const createUserTypeSchema = Joi.object();
const updateUserTypeSchema = Joi.object()
const getUserTypeSchema = Joi.object()

module.exports = { createUserTypeSchema, updateUserTypeSchema, getUserTypeSchema}