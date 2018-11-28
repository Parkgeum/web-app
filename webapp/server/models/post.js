var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

var postSchema = new mongoose.Schema({

    username: {type:String, default:''},
    //image: {type:String, required:true},
    text: {type:String, default:''},
    likes: {type:Number, default:0}, 
    data: {type:Date, default:Date.now},
    //주소 정보 필요?
});

module.exports = mongoose.model('post',postSchema);