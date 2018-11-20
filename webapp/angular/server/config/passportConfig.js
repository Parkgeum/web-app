const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

//email과 password가 유효한지 확인
passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            //매개변수로 이메일
            User.findOne({ email: username },
                (err, user) => {
                    //에러가 발생하면 반환됨
                    if (err)
                        return done(err);

                    else if (!user)
                        return done(null, false, { message: 'Email is not registerd' });

                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);