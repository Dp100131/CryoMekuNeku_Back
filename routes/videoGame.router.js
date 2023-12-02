const express = require('express');

const VideoGameService = require('./../services/videoGame.service');
const validatorHandler = require('./../Middlewares/validator.handler');
const { checkRoles } = require('./../Middlewares/auth.handler');
const { createVideoGameSchema, getVideoGameSchema, updateVideoGameSchema } = require('./../schemas/videoGame.schema');

const router = express.Router();
const service = new VideoGameService();

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
  validatorHandler(getVideoGameSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  checkRoles(1),
  validatorHandler(createVideoGameSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getVideoGameSchema, 'params'),
  validatorHandler(updateVideoGameSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const videoGame = await service.update(id, body);
      res.json(videoGame);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  checkRoles(1),
  validatorHandler(getVideoGameSchema, 'params'),
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