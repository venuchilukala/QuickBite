const Carts = require('../model/Carts')

//To get cart by email id
const getCartByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        const query = { email: email }
        const result = await Carts.find(query).exec();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//post a item when add to cart is clicked
const addToCart = async (req, res) => {
    const { menuItemId, name, recipe, image, quantity, price, email } = req.body;
    try {

        //Check if item exists in cart 
        const existingCartItem = await Carts.findOne({ menuItemId, email })
        if (existingCartItem) {
            return res.status(400).json({ message: "Product already exists in the cart!" })
        }
        else {
            const cartItem = await Carts.create({ menuItemId, name, recipe, image, quantity, price, email })
            res.status(201).json(cartItem)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete a cart item from cart 
const deleteCartItem = async(req, res) =>{
    const {id} = req.params 
    try {
        const deletedCartItem = await Carts.findByIdAndDelete(id)
        if(!deletedCartItem){
            return res.status(401).json({message: "Cart item not Found!"})
        }
        res.status(200).json({message: "Cart Item Deleted Successfully!!!"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getCartByEmail,
    addToCart,
    deleteCartItem,
}