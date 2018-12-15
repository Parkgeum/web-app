var mongoose = require('mongoose');

var con = require('./../con');
var mongo=con.mongo;

mongoose.connect(mongo, {useNewUrlParser: true});

var commentSchema = new mongoose.Schema({
    username: String,
    comments: String,
    time: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({

    username: {type:String, default:''},
    image: {type:String, required:true},
    text: {type:String, default:''},
    likes: [String],
    time: {type:Date, default:Date.now},
    image: {type:String},
    comments: [commentSchema]
});

module.exports = mongoose.model('post',postSchema);