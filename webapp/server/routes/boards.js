var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var User = require('./../models/user')

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

//following기준 게시글 불러오기
router.post('/follow', ensureAuthorized, function (req, res, next) {

    var findConditionToken ={
        jsonWebToken: req.token
    };

    //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
    User.findOne(findConditionToken, function(err, user){
        if(err) {res.send({success:false, type:"Error Occured"+err});}
        else {
            //user값에 저장된 사용자 이름과 posts를 받아옴
            var follow = user.following
            follow.push(user.username)
            console.log(follow)

            User.find({"username":{"$in":follow}},function(err, rawContent){
                    if(err) throw err;
                    res.send(rawContent); 
            })
        }
      })
});

function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
      var bearer = bearerHeader.split(" "); 
      bearerToken = bearer[0];
      req.token = bearerToken;
      next();
    } else{
      res.sendStatus(403);
    }
  }
module.exports = router;
