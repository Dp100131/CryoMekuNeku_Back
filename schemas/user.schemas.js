/**
 *
 *userId
  type: DataTypes.INTEGER,
  userName
  type: DataTypes.STRING(100),
  userLastName
  type: DataTypes.STRING(100),
  email
  type: DataTypes.STRING(200),
  userPassword
  type: DataTypes.STRING(200),
  typeId
  type: DataTypes.INTEGER,
  recoveryToken
  field: 'recovery_token',
 *
 */
const Joi = require('joi');

const userId = Joi.number().integer();
const userName = Joi.string().max(100);
const userLastName = Joi.string().max(100);
const email = Joi.string().email().max(200);
const userPassword = Joi.string();
const typeId = Joi.number().integer();
const recoveryToken = Joi.string();
const balance = Joi.number();

const createUserSchema = Joi.object({
  userName: userName.required(),
  userLastName: userLastName.required(),
  email: email.required(),
  password: userPassword.required(),
  typeId: typeId.required()
});
const updateUserSchema = Joi.object({
  userId:userId,
  userName: userName,
  userLastName: userLastName,
  email: email,
  balance:balance
})
const getUserSchema = Joi.object({
  userId: userId.required()
})
const passwordUserSchema = Joi.object({
  userId: userId.required(),
  recoveryToken: recoveryToken.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, passwordUserSchema}