const jwt = require('jsonwebtoken');

function verifyJwt(Jwt, secret) {

  return jwt.verify(Jwt, secret);

}
function signJwt(payload, secret) {

  return jwt.sign(payload, secret);

}

module.exports = { verifyJwt, signJwt }