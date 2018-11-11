var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

var userSchema = new mongoose.Schema({
    id: String,
    password: String,
    login: Boolean
    //jsonWebToken: String
});

module.exports = mongoose.model('user',userSchema);