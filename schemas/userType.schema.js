const Joi = require('joi');
const id = Joi.number().integer();
const name = Joi.string();
const description = Joi.string().max(512);
const createUserTypeSchema=Joi.object({
  name:name.required(),
  description:description.required()
});
const updateUserTypeSchema=Joi.object({
  name:name,
  description:description
});
const getUserTypeSchema=Joi.object({
  id:id.required(),
});
module.exports = {createUserTypeSchema, updateUserTypeSchema, getUserTypeSchema}
/*
id
type: DataTypes.INTEGER
name
type: DataTypes.STRING
description
type: DataTypes.STRING.length(512)
*/