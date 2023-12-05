const Joi = require('joi');
const id = Joi.number().integer();
const name = Joi.string();
const lastname = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const userType = Joi.number().integer();
const balance = Joi.number();
const createUserSchema=Joi.object({
  email:email.required(),
  password:password.required(),
  userType:userType.required()
});
const updateUserSchema=Joi.object({
  email:email,
  userType:userType,
  name:name,
  lastname:lastname,
  password:password,
  balance:balance
});
const getUserSchema=Joi.object({
  id:id.required(),
});
module.exports = { createUserSchema, updateUserSchema, getUserSchema}
/*
id
type: DataTypes.INTEGER
name
type: DataTypes.STRING
lastname
type: DataTypes.STRING
email
type: DataTypes.STRING,
password
type: DataTypes.STRING
userType
type: DataTypes.STRING,
balance
type: DataTypes.FLOAT,
*/