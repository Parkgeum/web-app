var mongoose = require('mongoose');

var con = require('./../con');
var mongo=con.mongo;

mongoose.connect(mongo, {useNewUrlParser: true});

var restaurantSchema = new mongoose.Schema({

    restaurant: {type:String, required:true},
    image: {type:String, default:'null'},
    address: {type:String},
    telephone: {type:String},
    business_hours: {type:String},
    breake_time: {type:String},
    likes: [String]
});

module.exports = mongoose.model('restaurant',restaurantSchema);