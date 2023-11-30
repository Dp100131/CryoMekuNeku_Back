/**
 * type_id
 * type: DataTypes.INTEGER
 * description
 * type: DataTypes.TEXT
 */
const Joi = require('joi');

const createUserTypeSchema = Joi.object();
const updateUserTypeSchema = Joi.object()
const getUserTypeSchema = Joi.object()

module.exports = { createUserTypeSchema, updateUserTypeSchema, getUserTypeSchema}