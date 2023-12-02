const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../Middlewares/validator.handler');
const { checkRoles } = require('./../Middlewares/auth.handler');
const { createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles(1),
  async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {

      const { id } = req.params;
      if(id == req.user.userId){
        const user = await service.findOne(id);
        res.json(user);
      }else{
        throw boom.unauthorized();
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles(1, 2),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;