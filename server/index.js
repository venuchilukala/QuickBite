const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = require('./api/middleware/veriftToken')

const app = express()
//middleware
app.use(cors())
app.use(express.json())


/***************************************************************************************************************/
//Mongodb configuration using mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@quickbite-mongoose-db.hixnd.mongodb.net/quickbite-db?retryWrites=true&w=majority&appName=quickbite-mongoose-db`).then(() => console.log("Mondodb connected successfully using mongoose")).catch((error) => console.log("Error while connecting to Db", error))

//JWT authentication 
app.post('/jwt', async(req, res)=>{
  const user = req.body
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1hr'} )
  res.send({token})
}) 

//import routes here
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
const userRoutes = require('./api/routes/userRoutes')

app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)
app.use('/users', userRoutes)

/***************************************************************************************************************/

const port = process.env.PORT || 6001;

app.get('/',verifyToken, (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

//venuchilukala111
//aOIhxbSVpZG26INI

