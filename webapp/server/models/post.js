var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

var postSchema = new mongoose.Schema({

    username: {type:String, default:''},
    //image: {type:String, required:true},
    text: {type:String, default:''},
    likes: [String],
    time: {type:Date, default:Date.now},
    image: {type:String}
});

module.exports = mongoose.model('post',postSchema);