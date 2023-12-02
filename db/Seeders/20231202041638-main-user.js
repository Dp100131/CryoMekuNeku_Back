'use strict';
const { USER_TABLE } = require('../Models/user.model');
const { config } = require('../../config/config');
const { hashPassword } = require('../../util/security/password.security')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(USER_TABLE, [{
      user_name: 'Daniel Andrés',
      user_lastname: "Pinto Ortega",
      email: "danielandrespintoortega21212@gmail.com",
      user_password: await hashPassword(config.mainPasswordUser),
      type_id: 1
    }]);
  },

  async down (queryInterface ) {
    await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
