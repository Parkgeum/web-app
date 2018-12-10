var express = require('express');
var router = express.Router();
var Restaurant = require('./..//models/restaurant')
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/member', { useNewUrlParser: true });

//맛집 정보
router.post('/restaurant', function (req, res, next) {

  var restID = req.body.restID
  //맛집 데이터의 _id값 받아서 정보 출력
  Restaurant.findOne({"_id":restID}, function(err, restaurant){
      if(err) {res.send({success:false, type:"Error Occured"+err});}
      else {
        res.send({success: true, data: restaurant}); 
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

//맛집 정보 수정하는 기능 추가하기


module.exports = router;
