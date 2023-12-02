const express = require("express");

const userRouter = require('./products.router');
const videoGameRouter = require('./categories.router');
const historicalRouter = require('./users.router');
const cartRouter = require('./orders.router');
const authRouter = require('./customers.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/user', userRouter);
  app.use('/videoGame', videoGameRouter);
  app.use('/historical', historicalRouter);
  app.use('/cart', cartRouter);
  app.use('/auth', authRouter);
}

module.exports = routerApi;