const boom = require('@hapi/boom');

function checkRoles(...roles) {

  return (req, res, next) => {
    const user = req.user;
    if(roles.includes(user.typeId)){
      next();
    }else{
      boom.unauthorized();
    }
  }

}

module.exports = { checkRoles }