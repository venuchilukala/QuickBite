const express = require('express')
const router = express.Router()

const menuController = require('../controllers/menuControllers')

//Get all menu items
router.get('/', menuController.getAllMenuItems)

// post a menu item
router.post('/', menuController.postMenuItem)

module.exports = router