const { Sequelize } = require('sequelize');

const { config } = require('../Config/config');
const { setupModels } = require('../Db/Models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(
  URI,
  {
    dialect: 'postgres'
  }
);

setupModels(sequelize);

module.exports = sequelize;