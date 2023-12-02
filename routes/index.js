const express = require("express");

const userRouter = require('./user.router');
const videoGameRouter = require('./videoGame.router');
const historicalRouter = require('./historical.router');
const cartRouter = require('./cart.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use(router);
  app.use('/user', userRouter);
  app.use('/videoGame', videoGameRouter);
  app.use('/historical', historicalRouter);
  app.use('/cart', cartRouter);
  app.use('/auth', authRouter);
}

module.exports = routerApi;