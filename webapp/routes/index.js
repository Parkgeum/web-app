var express = require('express');
var router = express.Router();
var User = require('./../models/user')
var mongoose = require('mongoose');
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

  if (signup.id==="") res.send('id를 입력하세요.');
  if (signup.password==="") res.send('password를 입력하세요.');
  User.findOne({'id': req.body.id}, function(err, user){
    if (err) {
      console.err(err);
      throw err;
    } 
    else if (user===null) User.create(signup, function() {res.send({success: true, type: "signup"})});
    else res.send('이미 존재하는 id입니다.');
  })
  //res.redirect('/member');
});

router.post('/member/login', function(req, res) {
  User.findOne({'id': req.body.id}, function(err, user){
    if (err) {
      console.err(err);
      throw err;
    } 
    else if (user===null) res.send('일치하는 회원정보가 없습니다.');
    else if(!(user.password===req.body.password)) res.send('일치하는 회원정보가 없습니다.');
    else {
      User.updateOne(user, {$set:{'login': true}}, function() {
        this.userid = user._id;
        res.send({
          success: true,
          type: "login"
        })
        //res.redirect('/member');
      })
    }
  })
});

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
//  res.redirect('/member');
});

router.post('/member/login/logout', function(req, res) {
  User.updateOne({'login': true}, {$set:{'login': false}}, function() {
    res.redirect('/member');})
})

module.exports = router;
