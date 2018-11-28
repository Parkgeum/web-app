
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

var boardSchema = new mongoose.Schema({

    username: String,
    image: [{
        data : Buffer,
        contentsType : String
   }]
});

module.exports = mongoose.model('board',boardSchema);