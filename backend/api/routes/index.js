var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  userCtrl =require('../controllers/UserController');
//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


//------------------------------User Routes-----------------------------------------

router.post('/User/addUser', userCtrl.register);

module.exports = router;
