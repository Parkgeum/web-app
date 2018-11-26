const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const User = mongoose.model('User');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can not be empty'
    },
    email: {
        type: String,
        required: 'Email can not be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can not be empty',
        minlength : [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String

});

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invaild e-mail.');

//Evnets
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//Methods
userSchema.methods.verifyPassword = function (password) {
    // 앞선 패스워드 => 평문, 뒤는 암호문
    return bcrypt.compareSync(password, this.password);
}
// => 비교를 통해 일치하지 않을 경우, passportConfig.js의 false로 되돌린다.


//불려지는 generateJwt 함수
userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET
        // ,{
        //     expiresIn : process.env.JWT_EXP
        // }
        );
}




mongoose.model('User', userSchema);