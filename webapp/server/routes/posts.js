var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var localuser;

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('post');
});

router.get('/posting', ensureAuthorized, function(req, res, next) {
    localuser = req.username;
    console.log(localuser)
});

router.post('/photo',  function (req, res, next) {
    //res.render('posting');
    //res.send({success:true, data:savedPost})
    //localuser = req.username;
    console.log(localuser)
    
    var post = new Post();
    post.text = req.body.text;
    post.username = localuser;
    console.log(req.body)
    Post.create(post, function() {res.send(post)});
    //localPosting(post, 
    //   function(err, savedPost){
    //        res.send({success:true, data:savedPost})
    //    }, 
    // );
    
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
//    console.log(bearerHeader);
    if (typeof bearerHeader !== "undefined") {
      var bearer = bearerHeader.split(" "); 
      bearerToken = bearer[0];
      req.username = bearerToken;
      next();
    } else{
      res.sendStatus(403);
    }
  }

module.exports = router;
