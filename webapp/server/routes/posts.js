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

// posts/photo로 연결
router.post('/photo', ensureAuthorized, function (req, res, next) {
    //res.render('posting');
    //res.send({success:true, data:savedPost})
    //localuser = req.username;
    var findConditionToken ={
        jsonWebToken: req.token
      };

    User.findOne(findConditionToken, function(err, user){
        if(err) {res.send({success:false, type:"Error Occured"+err});}
        else {
            var username = user.username
            console.log("username: "+username)
            
            var post = new Post();
            post.text = req.body.text;
            post.username = username;
            console.log(req.body)
            
            localPosting(post, function(err, savedPost){
                if (err){
                  res.send({success:false, data:"Error Occured"+err});
                } else {
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


function localPosting(Post, next) {
    Post.save(function(err, newPost) {
        newPost.save(function(err, savedPost) {
        next(err, savedPost);
      });
    });
}

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
