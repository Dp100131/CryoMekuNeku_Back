const express = require('express');
const passport = require('passport');

const CartService = require('./../services/cart.service');
const validatorHandler = require('./../Middlewares/validator.handler');
const { checkRoles } = require('./../Middlewares/auth.handler');
const { createCartSchema, getCartSchema, deleteCartSchema } = require('./../schemas/cart.schema');

const router = express.Router();
const service = new CartService();
router.get('/'
  , async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCartSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findByUser(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles(1),
  validatorHandler(createCartSchema, 'body'),
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

router.delete('/delete',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(deleteCartSchema, 'body'),
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