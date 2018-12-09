var express = require('express');
var router = express.Router();
var Post = require('./../models/post')
var mongoose = require('mongoose');
var User = require('./../models/user')
var Restaurant = require('./../models/restaurant')

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

//following기준 게시글 불러오기
router.get('/follow', ensureAuthorized, function (req, res, next) {

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
                    rawContent.reverse(); // 최신항목이 위에 뜨도록 역순 정렬
                    res.send({success: true, data: rawContent}); 
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
    //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
    User.findOne(findConditionToken, function(err, user){
        if(err) {res.send({success:false, type:"Error Occured"+err});}
        else {
            var username = user.username;
            console.log(username)
            //좋아요 할 게시글 불러옴.
            Post.findOne(findlocalPOst,function(err, rawContent){
                if(err) {res.send({success:false, type:"Error Occured"+err});}
                else {//게시글post의 좋아요 목록에 내 username 추가
                    var likelist = rawContent.likes
                    likelist.addToSet(username)
                    rawContent.save({"likes":likelist}, function(err, updatepost){
                        console.log('좋아요') 
                        //user목록의 post항목 업데이트
                        User.findOne({"posts":{"$elemMatch":findlocalPOst}}, function (err,likeuser) {
                            if (err) { res.send({ success: false, type: "Error Occured" + err }); }
                            else {
                                likeuser.posts=updatepost;
                                likeuser.save(updatepost, function(err, com){
                                    res.send(com)
                                })
                                 
                            }
                        })
                    })
                }
            })
            
        }
    })    
})

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


//맛집 이름 검색
router.post('/search/restaurant', function (req, res, next) {

    var SearchRestaurant = req.body.restaurant
    Restaurant.find({"restaurant":{"$in":SearchRestaurant}},function(err, findRestaurant){
        if(err) throw err;
        res.send(findRestaurant); 
    })
});


//사용자 검색
router.post('/search/user', function (req, res, next) {

    var SearchUser = req.body.username;
    User.find({"username":{"$in":SearchUser}},function(err, findUser){
        console.log(findUser)
        if(err) throw err;
        res.send(findUser); 
    })
});
module.exports = router;
