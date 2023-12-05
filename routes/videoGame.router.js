const express = require('express');
const multer = require('multer')
const path = require('path')
const VideoGameService = require('./../services/videoGame.service');
const validatorHandler = require('./../Middlewares/validator.handler');
const { checkRoles } = require('./../Middlewares/auth.handler');
const { getVideoGameSchema, updateVideoGameSchema } = require('./../schemas/videoGame.schema');
const passport = require('passport');

const router = express.Router();
const service = new VideoGameService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:gameId',
  validatorHandler(getVideoGameSchema, 'params'),
  async (req, res, next) => {
    try {
      const { gameId } = req.params;
      const user = await service.findOne(gameId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);
// Configura Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Ruta donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

router.post('/upload',
  passport.authenticate('jwt', {session: false}),
  checkRoles(1),
  upload.single('file'),
  async (req, res, next) => {
    try {
      const imageUrl = `http://localhost:4200/images/${req.file.filename}`;
      const data = {
        gameName: req.body.name,
        description: req.body.description,
        url: imageUrl,
        price: req.body.price,
      }
      const newGame = await service.create(data);
      res.status(201).json(newGame);
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:gameId',
  validatorHandler(getVideoGameSchema, 'params'),
  validatorHandler(updateVideoGameSchema, 'body'),
  async (req, res, next) => {
    try {
      const { gameId } = req.params;
      const body = req.body;
      const videoGame = await service.update(gameId, body);
      res.json(videoGame);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
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