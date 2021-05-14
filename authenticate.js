var passport = require('passport');
var jwt = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('./models/user');
var config = require('./config');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// exports.verifyAdmin = function (req, res, next) {
//     console.log(req.user);
  
//     if (!req.user) {
//       var err = new Error('You are not authenticated!');
//       err.status = 403;
//       next(err);
//     }
//     else {
//           next();
//     }
//   }


exports.getToken = function(user) {
  console.log(jwt.sign(user, config.secretKey, {expiresIn: 3600}))
  console.log(user)
  return jwt.sign(user, config.secretKey, {expiresIn: 3600});
}

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  console.log("JWT payload: ", jwt_payload);
  User.findOne({_id: jwt_payload._id}, (err, user) => {
      if (err) {
          return done(err, false);
      }
      else if (user) {
          //console.log(user);
          return done(null, user);
      }
      else {
        //console.log(user);
          return done(null, false);
      }
  })
}));

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.verifyAdmin = (req,res,next) => {
    if (!req.user.admin) {
      var err = new Error('You are not authorized to perform this operation!');
      err.status = 403 ;
      return next(err) ;
    }
    return next() ;
  };