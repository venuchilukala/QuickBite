const express = require('express');
const Carts = require('../model/Carts');

const router = express.Router();
const cartContollers = require('../controllers/cartControllers')

router.get('/', cartContollers.getCartByEmail)
router.post('/', cartContollers.addToCart)
router.delete('/:id', cartContollers.deleteCartItem)
router.put('/:id', cartContollers.updateCart)
router.get('/:id', cartContollers.getSingleCart)


module.exports = router