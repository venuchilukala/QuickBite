const express = require('express');
const Carts = require('../model/Carts');

const router = express.Router();
const cartContollers = require('../controllers/cartControllers')

router.get('/', cartContollers.getCartByEmail)
router.post('/', cartContollers.addToCart)
router.delete('/:id', cartContollers.deleteCartItem)


module.exports = router