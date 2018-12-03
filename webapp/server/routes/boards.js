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
            var follow = user.following //팔로잉 하고있는 사람
            follow.push(user.username) //+자기 이름
            console.log(follow)

            Post.find({"username":{"$in":follow}},function(err, rawContent){
                    if(err) throw err;
                    res.send(rawContent); 
            })
        }
      })
});

//좋아요 수 늘리기!
router.post('/like', ensureAuthorized, function (req, res, next) {
    var findlocalPOst ={
        '_id': req._id
      };

    var findConditionToken ={
        jsonWebToken: req.token
    };
    var likeuser;
    //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
    User.findOne(findConditionToken, function(err, user){
        if(err) {res.send({success:false, type:"Error Occured"+err});}
        else {
            var username = user.username;
            //좋아요 할 게시글 불러옴.
            Post.findOne(findlocalPOst,function(err, rawContent){
                if(err) {res.send({success:false, type:"Error Occured"+err});}
                else {//게시글의 좋아요 목록에 내 username 추가
                    likeuser = rawContent.username;
                    rawContent.save({$push:{"likes":username}}, function(err, updatepost){
                    console.log('좋아요')
                    })
                }
                /*
                User.findOne({"username":likeuser}, function(err, updatePost){
                    var update = updatePost.findOne()
                    if(err) res.send("에러 발생")
                    else {
                        updatePost.update({"posts":{$push:{"likes":username}}}, function(err, updatepost){
                        res.send(updatepost)})
                    }
                })*/
            })
            
        }
    })    
})

//사용자정보 UPDATE 함수
function localUpdate(User, next) {
  User.save(function(err, updateuser) {
    updateuser.save(function(err, updateuser) {
      next(err, updateuser);
    });
  });
}
function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    var postId = req.headers["_id"];

    if (typeof bearerHeader !== "undefined") {
      var bearer = bearerHeader.split(" "); 
      bearerToken = bearer[0];
      req.token = bearerToken;
      req._id = postId;
      next();
    } else{
      res.sendStatus(403);
    }
  }
module.exports = router;
