const jwt = require('jsonwebtoken')

//verify jwt 
// middle ware 
const verifyToken = (req, res, next) => {
    // console.log(req.headers.authorization)
    if(!req.headers.authorization){
      return res.status(401).send({message : "unauthorized access"})
    }
  
    const token = req.headers.authorization.split(' ')[1]
    // console.log(token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
      if(err){
        return res.status(401).send({message : "jwt token is invalid"})
      }
      req.decoded = decoded 
      next()
    })
  }

  module.exports = verifyToken