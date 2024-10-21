const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creating a Schema object for menu items 

const menuSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String,
    category: String,
    price: Number
})

//create a model for menu 
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;