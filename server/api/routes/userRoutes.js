const express = require('express')
const router = express.Router()

const veriftToken = require('../middleware/veriftToken')
const userController = require('../controllers/userController')


router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.get('/admin/:email', userController.getAdmin)
router.patch('/admin/:id', userController.makeAdmin)

module.exports = router