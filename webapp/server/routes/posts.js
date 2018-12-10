var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var User = require('./../models/user')
var Comment = require('./../models/comments')

mongoose.connect('mongodb://localhost:27017/member', { useNewUrlParser: true });

/* GET home page. */
//http://localhost:3000/posts
router.get('/', function (req, res, next) {
  res.render('post');
});

// posts/upload로 연결
router.post('/upload', ensureAuthorized, function (req, res, next) {
  //res.render('posting');
  //res.send({success:true, data:savedPost})
  //localuser = req.username;
  console.log('upload test');
  var findConditionToken = {
    jsonWebToken: req.token
  };

  //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      //user값에 저장된 사용자 이름과 posts를 받아옴
      var username = user.username
      var userposts = user.posts

      //post 모델을 생성해서 text값과 유저이름을 저장함
      var post = new Post();
      post.text = req.body.text;
      post.image = req.body.imageuri;
      post.username = username;

      //userposts 배열에 post 모델 값을 저장함 
      userposts.push(post)

      console.log(req.body)

      //post모델을 몽고디비에 저장함
      localPosting(post, function (err, savedPost) {
        if (err) {
          res.send({ success: false, data: "Error Occured" + err });
        } else {
          //찾아낸 user모델을 몽고디비에 저장함 (업데이트)
          localPosting(user, function (err, savedUser) {
            if (err) {
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
  Post.save(function (err, newPost) {
    newPost.save(function (err, savedPost) {
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
  } else {
    res.sendStatus(403);
  }
}

//게시물 댓글 작성
router.post('/comments', ensureAuthorized, function(req, res, next){
  var postID =  req.body.postID;
  var comments = req.body.comments;
  
  var findConditionToken = {
    jsonWebToken: req.token
  };
  //토큰을 사용해서 사용자를 찾은 다음 username 저장
  User.findOne(findConditionToken, function (err, user) {
    if (err) { res.send({ success: false, type: "Error Occured" + err }); }
    else {
      //user값에 저장된 사용자 이름과 posts를 받아옴
      var username = user.username

      Post.findOne({"_id":postID}, function(err, post){
        var input = new Comment();
        //var commentlist = post.commentSchema;
        input.username= username;
        input.comments= comments;
        //commentlist.addToSet(input);
        if(err) throw err;

        console.log(post)

        post.update({"comments":input}, function(err,postdb){
          console.log(postdb);
        })
        res.send(post);
      })
    }
  })
})


//localhost:3000/posts/info
router.get('/info', (req, res) => {

  Post.findById((err, docs) => {
    if (!err) {
      res.send(docs.reverse());
    }
    else {
      console.log("test info log");
    }
  });
});

// router.get('/info', (req, res) => {
//   User.findById(req.params.jsonWebToken, (err, doc) => {
//     if (!err) { res.send(doc); }
//     else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
//   });
// });

module.exports = router;
