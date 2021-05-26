var express = require('express');
var router = express.Router();
const passport = require('passport');
var User = require('../models/user');
var authenticate = require('../authenticate');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'soapust@gmail.com',
    pass: 'S3CuR1ty!' // naturally, replace both with your real credentials or an application-specific password
  },
  tls: {
    rejectUnauthorized: false //added because of self signed cert chain error //Error: self signed certificate in certificate chain
},
});

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
  User.register(new User({username: req.body.username, name: req.body.name, contactNumber: req.body.contactNumber, address: req.body.address, birthday: req.body.birthday, email: req.body.email, admin: req.body.admin,verified: req.body.verified}), 
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

router.post('/userVerification',(req,res) => {
  const {to} = req.body;
  var mailData = {
      from: 'soapust@gmail.com',
      to: to,
      subject: "SOAP User Verification",
      text: "Our Admin has verified your account! You can now login to SOAP"
  };
  transporter.sendMail(mailData, function(err, info) {
      if (err) {
          console.log(err);
      } else {
          // see https://nodemailer.com/usage
          console.log("info.messageId: " + info.messageId);
          console.log("info.envelope: " + info.envelope);
          console.log("info.accepted: " + info.accepted);
          console.log("info.rejected: " + info.rejected);
          console.log("info.pending: " + info.pending);
          console.log("info.response: " + info.response);
      }
      transporter.close();
  });
})
module.exports = router;
