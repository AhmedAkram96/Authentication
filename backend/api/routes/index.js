var express = require('express'),
  router = express.Router(),
  userCtrl =require('../controllers/UserController');
productCtrl=require('../controllers/ProductController');
//------------------------------User Routes----------------------------------------//

router.post('/User/addUser', userCtrl.register);
router.post('/User/login', userCtrl.login);


//------------------------------Product Routes-------------------------------------//
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.post('/product/createProduct', productCtrl.createProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


module.exports = router;
