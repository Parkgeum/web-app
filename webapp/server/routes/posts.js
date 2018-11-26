var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var done = false;

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('post');
});

router.post('/photo', function (req, res) {
    var post = new Post();
    post.image = req.files;
    console.log(req);

 //   1. post에 사진 정보 넣기

 //   1. 유저이름 찾기
 //   2. 1번이랑 사진 board[]에 추가 
    //var username = localStorage.getItem("username");
    //res.end("File uploaded.\n" + JSON.stringify(req.files));
    
});

module.exports = router;
