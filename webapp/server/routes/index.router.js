 const express = require('express');
 const router = express.Router();

 const ctrlUser = require('../controllers/user.controller');

 const jwtHelper = require('../config/jwtHelper');

 router.post('/register', ctrlUser.register);
 //호출이 되면 인증이 된다..?
 router.post('/authenticate', ctrlUser.authenticate);
 // fun1은 ctrlUser.userProfile보다 먼저 호출이 됨
 router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
 

 module.exports = router;
 