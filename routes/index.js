const express = require("express");
const userRouter = require("./user.router");
const userTypeRouter = require("./userType.router");
const userVideoGamesRouter = require("./userVideoGames.router");
const videoGamesRouter = require("./videoGame.router");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/usersType', userTypeRouter);
  router.use('/usersVideoGames', userVideoGamesRouter);
  router.use('/videoGames', videoGamesRouter);
}

module.exports = routerApi;