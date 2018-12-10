var mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true} );

var postSchema = new mongoose.Schema({

    username: {type:String, default:''},
    image: {type:String, required:true},
    text: {type:String, default:''},
    likes: [String],
    time: {type:Date, default:Date.now},
    //댓글 기능 추가
});

var restaurantSchema = new mongoose.Schema({

    restaurant: {type:String, required:true},
    image: {type:String},
    address: [String],
    telephone: {type:String},
    business_hours: {type:String},
    breake_time: {type:String},
    likes: [String]
});


var userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'id can not be empty',
        minlength : [2, 'id must be atleast 2 character long']
    },
    password: {
        type: String,
        required: 'Password can not be empty',
        minlength : [4, 'Password must be atleast 4 character long']
    },
    username: {
        type: String,
        required: 'userName can not be empty'
    },
    email: {
        type: String,
        required: 'Email can not be empty',
        unique: true
    },
    following: [String],
    follower:  [String],
    posts:  [postSchema], //작성한 게시글
    restaurants: [restaurantSchema], //좋아요 한 맛집
    image: {type:String,default:'null'},
    jsonWebToken: String
});

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invaild e-mail.');

//Evnets (비밀번호 해쉬화)
// userSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             next();
//         });
//     });
// });


//Methods
// userSchema.methods.verifyPassword = function (password) {
    // 앞선 패스워드 => 평문, 뒤는 암호문
//     return bcrypt.compareSync(password, this.password);
// }
// => 비교를 통해 일치하지 않을 경우, false

module.exports = mongoose.model('user',userSchema);