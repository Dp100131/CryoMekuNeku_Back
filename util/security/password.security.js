const bcrypt = require('bcrypt');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function comparePassword(passwordToCompare, hash) {
  return await bcrypt.compare(passwordToCompare, hash);
}

module.exports = { hashPassword, comparePassword};