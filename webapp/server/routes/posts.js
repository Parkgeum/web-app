var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var User = require('./../models/user')

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

/* GET home page. */
//http://localhost:3000/posts
router.get('/', function(req, res, next) {
    res.render('post');
});

// posts/upload로 연결
router.post('/upload', ensureAuthorized, function (req, res, next) {
    //res.render('posting');
    //res.send({success:true, data:savedPost})
    //localuser = req.username;
    console.log('upload test');
    var findConditionToken ={
        jsonWebToken: req.token
      };
    
    //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
    User.findOne(findConditionToken, function(err, user){
        if(err) {res.send({success:false, type:"Error Occured"+err});}
        else {
            //user값에 저장된 사용자 이름과 posts를 받아옴
            var username = user.username
            var userposts = user.posts

            //post 모델을 생성해서 text값과 유저이름을 저장함
            var post = new Post();
            post.text = req.body.text;
            post.username = username;

            //userposts 배열에 post 모델 값을 저장함 
            userposts.push(post)
            
            console.log(req.body)
            
            //post모델을 몽고디비에 저장함
            localPosting(post, function(err, savedPost){
                if (err){
                  res.send({success:false, data:"Error Occured"+err});
                } else {
                  //찾아낸 user모델을 몽고디비에 저장함 (업데이트)
                  localPosting(user, function(err, savedUser){
                    if(err){
                      console.log("유저 포스트 에러");
                    }
                  })
                  res.send({
                    success: true,
                    data: savedPost,
                    type: "post",
                  });
                }
              });
        }
      })
});

//게시물 업로드 함수
function localPosting(Post, next) {
    Post.save(function(err, newPost) {
        newPost.save(function(err, savedPost) {
        next(err, savedPost);
      });
    });
}

//전체 게시물 READ
router.get('/total', function(req, res, next){
  Post.find(function(err, posts){
    if(err) {res.send({success:false, type:"Error Occured"+err});}
    else {
      console.log("posts: "+posts)
      res.send({success:true, data:posts});
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
