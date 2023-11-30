const passport = require('passport');
/* const LocalStrategy = require('./strategies/local.strategy'); */
const JwtStrategy= require('./strategies/jwt.strategy');

/* passport.use(LocalStrategy); */ // Todo: LocalStrategy
passport.use(JwtStrategy);