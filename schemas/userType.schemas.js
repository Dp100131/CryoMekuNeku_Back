/**
 * type_id
 * type: DataTypes.INTEGER
 * description
 * type: DataTypes.TEXT
 */
const Joi = require('joi');

const typeId = Joi.number().integer();
const description = Joi.string();

const createUserTypeSchema = Joi.object({
  description: description.required()
});
const updateUserTypeSchema = Joi.object({
  typeId: typeId.required(),
  description: description.required()
})
const getUserTypeSchema = Joi.object({
  typeId: typeId.required()
})

module.exports = { createUserTypeSchema, updateUserTypeSchema, getUserTypeSchema}