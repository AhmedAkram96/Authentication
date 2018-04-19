var express = require('express'),
  router = express.Router(),
  userCtrl =require('../controllers/UserController');

//------------------------------User Routes-----------------------------------------

router.post('/User/addUser', userCtrl.register);
router.post('/User/login', userCtrl.login);

module.exports = router;
