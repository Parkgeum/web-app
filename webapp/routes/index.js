var express = require('express');
var router = express.Router();
var User = require('./../models/user')
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var jwtSecret = 'secret';
var userid;

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/member', function(req, res, next){
  res.render('login');
});

router.post('/member/signup', function(req, res) {
  var signup = new User();
  signup.id = req.body.id;
  signup.password = req.body.password;
  signup.username = req.body.username;
  signup.email = req.body.email;

  var findConditionLocalUser = {
    id: signup.id
  }

  User.findOne(findConditionLocalUser).exec(function(err, user) {
    if(err) {
      res.send({success:false, data:"Error Occured"+err});
    } else if (user) {
      res.send({
        success: false,
        type: "ID already exists"
      });
    } else if (!user) {
      localSignUp(signup, function(err, savedUser){
        if (err){
          res.send({success:false, data:"Error Occured"+err});
        } else {
          res.send({
            success: true,
            type: savedUser,
            token: savedUser.jsonWebToken
          });
        }
      });
    }
  });
});

function localSignUp(User, next) {

  User.save(function(err, newUser) {
    newUser.jsonWebToken = jwt.sign(newUser.toJSON(), jwtSecret);
    newUser.save(function(err, saveUser) {
      next(err, saveUser);
    });
  });
}

router.post('/member/login', function(req, res) {
  var local_id = req.body.id;
  var local_password = req.body.password;

  var findConditionLocalUser = {
    id: local_id,
    password: local_password
  }

  User.findOne(findConditionLocalUser).exec(function (err, user) {
    
    if(err){
      res.send({success:false, data:"Error Occured"+err});
    } else if(!user) {
      res.send({
        success: false,
        type: "Incorrect id/password"
      });
    } else if(user) {
      res.send({
        success:true,
        type: user,
        token: user.jsonWebToken
      });
    }
  })
});

router.get('/me', ensureAuthorized, function(req, res, next){
  var findConditionToken ={
    jsonWebToken: req.token
  };
  User.findOne(findConditionToken, function(err, user){
    if(err) {res.send({success:false, type:"Error Occured"+err});}
    else {
      console.log("me: "+user)
      res.send({success:true, type:user});
    }
  })
});

function ensureAuthorized(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else{
    res.sendStatus(403);
  }
}


router.post('/member/delete', function(req, res) {
  User.findOne({'id': req.body.id}, function(err, user){
    if (err) {
      console.err(err);
      throw err;
    } 
    else if (user===null) res.send('일치하는 id가 없습니다.');
    else if(!(user.password===req.body.password)) res.send('password가 일치하지 않습니다.');
    else User.remove(user, function() {res.send('회원정보가 삭제되었습니다.');})
  })
});


module.exports = router;
