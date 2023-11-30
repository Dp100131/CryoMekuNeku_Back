'use strict';
const { DataTypes } = require('sequelize');
const { USER_TABLE } = require('./../Models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'recovery_token')
  }
};
