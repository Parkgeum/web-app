var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/user.controller');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
