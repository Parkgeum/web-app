var mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/member', {useNewUrlParser: true});

var userSchema = new mongoose.Schema({
    id: String,
    password: String,
    username: String,
    email: String,
    following: {type:Number, default:0}, //팔로잉 목록 볼 수 있게 수정해야 함
    follower: {type:Number, default:0},
    posts: {type: Number, default:0},
    image: {
        data : Buffer,
        contentsType : String
   },
    // password: {
    //     type: String,
    //     required: 'Password can not be empty',
    //     minlength : [4, 'Password must be atleast 4 character long']
    // },
    // userName: {
    //     type: String,
    //     required: 'Full name can not be empty'
    // },
    // email: {
    //     type: String,
    //     required: 'Email can not be empty',
    //     unique: true
    // },
   
    jsonWebToken: String
});

// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invaild e-mail.');

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