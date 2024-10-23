const Menu = require("../model/Menu");

//Get all menus
const getAllMenuItems = async(req, res) => {
    try {
        const menus = await Menu.find({}).sort({createdAt : -1});
        res.status(200).json(menus)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// Post a menu item
const postMenuItem = async(req, res) =>{
    const newItem = req.body 

    try {
        const result = await Menu.create(newItem)
    res.status(200).json(newItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllMenuItems,
    postMenuItem
}