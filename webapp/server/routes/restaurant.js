var express = require('express');
var router = express.Router();
var Restaurant = require('./..//models/restaurant')
var mongoose = require('mongoose');
var User = require('./../models/user')


mongoose.connect('mongodb://localhost:27017/member', { useNewUrlParser: true });

//맛집 정보
router.post('/restaurant', function (req, res, next) {

  var restaurant = req.body.restaurant
  //맛집 데이터의 _id값 받아서 정보 출력
  Restaurant.findOne({"restaurant":restaurant}, function(err, restaurant){
      if(err) {res.send({success:false, type:"Error Occured"+err});}
      else {
        if(restaurant==null){
          res.send({success: false, data: restaurant}); 
        } else{
          console.log(restaurant)
          res.send({success: true, data: restaurant}); 
        }
      }
    })
});

//모든 맛집 리스트
router.post('/restaurant/list', function (req, res, next) {

  //모든맛집리스트불러옴
  Restaurant.find( function(err, restaurant){
      if(err) {res.send({success:false, type:"Error Occured"+err});}
      else {
        console.log(restaurant)
        res.send(restaurant);
      }
    })
});

//맛집 추가
router.post('/addrestaurant', function (req, res) {
  var add = new Restaurant();
  add.restaurant = req.body.restaurant;
  add.address = req.body.address.split(' ');
  add.telephone = req.body.telephone;
  add.business_hours = req.body.business_hours;
  add.image = req.body.image;

  //맛집 이름이랑 주소 같으면
  var findConditionResturant = {
    restaurant: add.restaurant,
    address: add.address
  }

  Restaurant.findOne(findConditionResturant).exec(function (err, user) {
    if (err) {
      res.send({ success: false, data: "Error Occured" + err });
    } else if (user) {
      res.send({
        success: false,
        data: "이미 존재하는 맛집!",
        type: "맛집 추가!"
      });
    } else if (!user) {
        addRestaurant(add, function (err, savedRestaurant) {
        if (err) {
          res.send({ success: false, data: "Error Occured" + err });
        } else {
          res.send({
            success: true,
            data: savedRestaurant,
          });
        }
      });
    }
  });
});

//맛집등록 함수
function addRestaurant(Restaurant, next) {
    Restaurant.save(function (err, newRestaurant) {
        next(err, newRestaurant);
    });
}

//맛집 좋아요
router.post('/restaurant/like', ensureAuthorized, function (req, res, next) {
  var findConditionToken ={
      jsonWebToken: req.token
  };

  var restID = req.body.restID
  //토큰을 사용해서 사용자를 찾은 다음 user값으로 받음. 
  User.findOne(findConditionToken, function(err, user){
      if(err) {res.send({success:false, type:"Error Occured"+err});}
      else {
          var username = user.username;
          console.log(username)
          //좋아요 할 맛집 불러옴.
          Restaurant.findOne({"_id":restID},function(err, restaurant){
              if(err) {res.send({success:false, type:"Error Occured"+err});}
              else {//맛집 데이터베이스의 좋아요 목록에 내 username 추가
                  var likelist = restaurant.likes
                  likelist.addToSet(username)
                  restaurant.save({"likes":likelist}, function(err, update){
                      console.log('좋아요') 
                     //User목록의 restaurant에 해당 맛집 추가
                     user.restaurants.addToSet(update);
                     user.update({"restaurants":update}, function(err, userdb){
                       console.log(userdb)
                     })
                     res.send(user)
                  })
              }
          })
      }
  })    
})


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



//맛집 정보 수정하는 기능 추가하기


module.exports = router;
