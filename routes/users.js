var express = require('express');
var router = express.Router();
const passport = require('passport');
var User = require('../models/user');
var authenticate = require('../authenticate');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', authenticate.verifyUser,authenticate.verifyAdmin,function(req, res, next) {
  User.find({})
  .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
  }, (err) => next(err))
  .catch((err) => next(err));
});
router.delete('/:id',authenticate.verifyUser,authenticate.verifyAdmin, function(req, res, next) {
  User.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});
router.put('/:id',authenticate.verifyUser,authenticate.verifyAdmin, function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
}, { new: true })
.then((user) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(user);
}, (err) => next(err))
.catch((err) => next(err));
});

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username, name: req.body.name, contactNumber: req.body.contactNumber, birthday: req.body.birthday, email: req.body.email, admin: req.body.admin,verified: req.body.verified}), 
  req.body.password, (err, admin) => {
  if(err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({err: err});
  }
  else {
    passport.authenticate('local')(req, res, () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Registration Successful!'});
    });
  }
});
});

router.post('/login', passport.authenticate('local'), (req, res) => {

  if (req.user.verified == true) {
    var token = authenticate.getToken({_id: req.user._id});
    var userDetails = ({user: req.user})
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, user: userDetails, status: 'You are successfully logged in!'});
  } 
  if (req.user.verified == false) {
    res.statusCode = 200;
    res.json({success: false,token: false, user: false,status: 'You are not verified'});
  }
  
});

router.get('/logout',(req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});
module.exports = router;
