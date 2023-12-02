'use strict';

const { USER_TYPE_TABLE } = require('../Models/userType.model');

const typesDescription = ['main', 'user']

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {

    for (let i = 0; i < typesDescription.length; i++) {
      await queryInterface.bulkInsert(USER_TYPE_TABLE, [{
        type_id: (i+1),
        description: typesDescription[i]
      }])

    }
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(USER_TYPE_TABLE, null, {});
  }
};
