 require('./config/config'); 
 require('./models/db');
 require('./config/passportConfig');

 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const passport = require('passport');

 const rtsIndex = require('./routes/index.router');

 var app = express();

 //middleware
 app.use(bodyParser.json());
 app.use(cors());
 //passport를 사용하기 위해 신청
 app.use(passport.initialize());
 app.use('/api', rtsIndex);


 // error handler
 app.use((err, req, res, next) => {
     if (err.name == 'validationError') {
         var valErrors = [];
         Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
         res.status(422).send(valErrors)
     }
 });

 // start server
 app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.port}`));

//올바른 코드로 인증을 진행하면 토큰이 발행됨
//26:10

//"JWT_EXP" : "2m"
// => JWT 만료시간 뿐만 아니라 user.model.js에 등록해야함 29:12