'use strict';
const { DataTypes } = require('sequelize');
const { USER_TABLE } = require('./../Models/user.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {
    await queryInterface.addColumn(USER_TABLE, 'balance', {
      allowNull: false,
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'balance')
  }
};
