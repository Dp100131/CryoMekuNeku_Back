const express = require('express');
const passport = require('passport');

const HistoricalService = require('./../services/historical.service');
const validatorHandler = require('./../Middlewares/validator.handler');
const { checkRoles } = require('./../Middlewares/auth.handler');
const { createHistoricalSchema, getHistoricalSchema } = require('./../schemas/historical.schema');



const router = express.Router();
const service = new HistoricalService();

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
  validatorHandler(getHistoricalSchema, 'params'),
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
  validatorHandler(createHistoricalSchema, 'body'),
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

module.exports = router;