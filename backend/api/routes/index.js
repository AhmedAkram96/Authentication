var express = require('express'),
  router = express.Router(),
  userCtrl =require('../controllers/UserController');

//------------------------------User Routes-----------------------------------------

router.post('/User/addUser', userCtrl.register);

module.exports = router;
