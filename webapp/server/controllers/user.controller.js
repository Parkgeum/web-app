const mongoose = require('mongoose');
// const passport = require('passport');
const_ = require('lodash');

const Signup = mongoose.model('signup');


module.exports.register = (req, res, next) => { 
    // console.log('inside register fn.');
    var signup = new Signup();
    signup.id = req.body.id;
    signup.username = req.body.username;
    signup.password = req.body.password;
    signup.email = req.body.email;
    console.log(signup.id);
    console.log(signup.username);
    console.log(signup.password);
    console.log(signup.email);
    signup.save((err, doc) => {
        if (!err)
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found.']);
            else   
                return next(err);
        }
    });
}


// module.exports.authenticate = (req, res, next) => {
//     // 인증 함수 호출, 먼저 local을 호출해야 한다.
//     passport.authenticate('local', (err, user, info)=> {
//         //error form passport middleware
//         //done function의 오류 호출
//         if(err) 
//             return res.status(400).json(err);
//         // 등록된 유저가 로그인에 성공시 JWT 토큰 반환  
//         else if(user)
//             return res.status(200).json({ "token": user.generateJwt() });
//         // unknown user or wrong password    
//         else        
//             return res.status(404).json(info);
//     })(req,res);
//     //part1 21분쯤 내용 설명 다시?
// }


//index.route.js에 추가해야함
// module.exports.userProfile = (req, res, next) => {
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             //id가 일치하지 않을 경우
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else   
//                 return res.status(200).json({ status: true, user : _.pick(user,['fullName', 'email']) });
//     });
// }
