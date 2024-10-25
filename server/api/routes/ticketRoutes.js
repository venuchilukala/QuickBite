const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/verifyToken')
const Ticket = require('../model/Ticket')

router.post('/', verifyToken, async(req, res) => {
    const ticket = req.body 
    try {
        const result = await Ticket.create(ticket)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

 )

module.exports = router