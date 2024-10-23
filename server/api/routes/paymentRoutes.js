const express = require('express')
const router = express.Router()

const Payment = require('../model/Payment')
const Cart = require('../model/Carts')
const { default: mongoose } = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

//Verify token 
const verifyToken = require('../middleware/verifyToken')

//post a payment
router.post('/', verifyToken ,async(req, res) => {
    const payment = req.body 

    try {
        const paymentRequest = await Payment.create(payment)

        //delete cart after payment
        const cartIds = payment.cartItems.map(id => new ObjectId(id));
        const deletedCartRequest = await Cart.deleteMany({_id: {$in: cartIds}})

        res.status(200).json({paymentRequest, deletedCartRequest})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router