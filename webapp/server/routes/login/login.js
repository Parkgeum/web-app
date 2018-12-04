var express = require('express');
var router = express.Router();
var User = require('./../../models/user')
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var jwtSecret = 'secret';
var fs = require('fs');
var crypto = require('crypto');
var userid;


mongoose.connect('mongodb://localhost:27017/member', { useNewUrlParser: true });

/* GET home page. */
//http//localhost:3000
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/member', function (req, res, next) {
  res.render('login');
});

//http://localhost:3000/member/info
router.get('/member/info', (req, res) => {
  
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    }
    else {
      console.log("test info log");
    }
  });
});

//회원가입
router.post('/member/signup', function (req, res) {
  var signup = new User();
  signup.id = req.body.id;
  signup.password = req.body.password;
  signup.username = req.body.username;
  signup.email = req.body.email;

  var findConditionLocalUser = {
    id: signup.id
  }

  User.findOne(findConditionLocalUser).exec(function (err, user) {
    if (err) {
      res.send({ success: false, data: "Error Occured" + err });
    } else if (user) {
      res.send({
        success: false,
        data: "ID already exists",
        type: "signup"
      });
    } else if (!user) {
      localSignUp(signup, function (err, savedUser) {
        if (err) {
          res.send({ success: false, data: "Error Occured" + err });
        } else {
          res.send({
            success: true,
            data: savedUser,
            type: "signup",
            token: savedUser.jsonWebToken
          });
        }
      });
    }
  });
});

//회원가입 함수
function localSignUp(User, next) {

  User.save(function (err, newUser) {
    newUser.image.contentsType = 'image/jpg';
    var buffer = fs.readFileSync('./routes/login/profile.jpg');  //이미지부분, 추후 수정!
    newUser.image.data = '';
    newUser.jsonWebToken = jwt.sign(newUser.toJSON(), jwtSecret);
    newUser.save(function (err, saveUser) {
      next(err, saveUser);
    });
  });
}

//로그인
router.post('/member/login', function (req, res) {
  var local_id = req.body.id;
  var local_password = req.body.password;

  var findConditionLocalUser = {
    id: local_id,
    password: local_password
  }
  console.log(local_id);
  console.log(local_password);

  User.findOne(findConditionLocalUser).exec(function (err, user) {

    if (err) {
      res.send({ success: false, data: "Error Occured" + err });
      console.log("error2");
    } else if (!user) {
      res.send({
        success: false,
        data: "Incorrect id/password",
        type: "login"
      });
      console.log("error1");
    } else if (user) {
      res.send({
        success: true,
        data: user,
        type: "login",
        token: user.jsonWebToken
      });
      console.log("Success");
    }
  })
});

//사용자정보 READ 
router.get('/me', ensureAuthorized, function (req, res, next) {
  // var token = localStorage.getItem("token");
  // console.log("server" + token);
  var findConditionToken = {
    jsonWebToken: req.token
    // jsonWebToken: localStorage.getItem("token")
  };
  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      console.log("username: " + user.username)
      console.log("following: " + user.following.length)
      console.log("follower: " + user.follower.length)
      console.log("posts: " + user.posts.length)
      //console.log("image: "+image.data)
      res.send({ success: true, data: user });
    }
  })
});

//사용자정보 UPDATE
router.post('/member/update', ensureAuthorized, function (req, res) {
  //토큰으로 사용자 찾고 그 사용자에 username,email 정보 덮어쓰기
  var username = req.body.username;
  var email = req.body.email;

  var findConditionToken = {
    jsonWebToken: req.token
  };

  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      console.log("id: " + user.id);
      user.username = username;
      user.email = email;

      localUpdate(user, function (err, updateuser) {
        if (err) {
          res.send({ success: false, data: "Error Occured" + err });
        } else {
          res.send({
            success: true,
            data: updateuser,
            type: "userinfo_update",
          });
        }
      });
    }
  })
});

//비밀번호 수정
router.post('/member/updatePass', ensureAuthorized, function (req, res) {
  //토큰으로 사용자 찾고 그 사용자에 username,email 정보 덮어쓰기
  var pre_password = req.body.pre_password; //이전비번
  var new_password = req.body.new_password; //새로운비번

  var findConditionToken = {
    jsonWebToken: req.token
  };

  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      console.log("id: " + user.id);
      //이전 비밀번호가 저장 되어있는 비밀번호와 같으면
      if (user.password == pre_password) {
        user.password = new_password;
        localUpdate(user, function (err, updateuser) {
          if (err) {
            res.send({ success: false, data: "Error Occured" + err });
          } else {
            res.send({
              success: true,
              data: updateuser,
              type: "password_update",
            });
          }
        });
      } else { //다르면
        res.send({ success: false, data: "Not Matching" });
      }
    }
  })
});


//팔로우하기
router.post('/member/addfollowing', ensureAuthorized, function (req, res) {
  var followuser = req.body.followuser;

  var findConditionToken = {
    jsonWebToken: req.token
  };

  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      User.findOne({username: followuser}, function(err,followinguser){
        console.log(followinguser);
        //팔로잉 항목 추가
        var followinglist = user.following;
        followinglist.push(followinguser.username);
        //팔로잉 당하는 사람의 팔로우 항목 추가
        var followerlist = followinguser.follower;
        followerlist.push(user.username);

        //팔로잉하는 사람 유저정보 업데이트
        localUpdate(user, function (err, updateuser) {
          if (err) {
            res.send({ success: false, data: "Error Occured" + err });
          } else {
            //팔로잉 당하는 사람 유저정보 업데이트
            localUpdate(followinguser, function (err, updateuser) {
              if (err) {
                res.send({ success: false, data: "Error Occured" + err });
              } else {
                res.send({
                  success: true,
                  //data: updateuser,
                  type: "following / follower 추가",
                });
              }
            }); 
          
          }
        });
      })
    }
  })
});

//사용자정보 UPDATE 함수
function localUpdate(User, next) {
  User.save(function (err, updateuser) {
    updateuser.save(function (err, updateuser) {
      next(err, updateuser);
    });
  });
}

function ensureAuthorized(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  //console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[0];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}


router.post('/member/delete', function (req, res) {
  User.findOne({ 'id': req.body.id }, function (err, user) {
    if (err) {
      console.err(err);
      throw err;
    }
    else if (user === null) res.send('일치하는 id가 없습니다.');
    else if (!(user.password === req.body.password)) res.send('password가 일치하지 않습니다.');
    else User.remove(user, function () { res.send('회원정보가 삭제되었습니다.'); })
  })
});

router.post('/member/login/logout'), function (req, res) {
  res.send('로그아웃 됨')
}


module.exports = router;
