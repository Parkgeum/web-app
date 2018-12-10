var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    username: String,
    comments: String,
    time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('coment',commentSchema);