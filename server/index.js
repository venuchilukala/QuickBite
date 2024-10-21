const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
require('dotenv').config()


const app = express()
//middleware
app.use(cors())
app.use(express.json())

/**************************************************************************************************************/
//Mongodb configuration using mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@quickbite-mongoose-db.hixnd.mongodb.net/quickbite-db?retryWrites=true&w=majority&appName=quickbite-mongoose-db`).then(() => console.log("Mondodb connected successfully using mongoose")).catch((error) => console.log("Error while connecting to Db", error))

//import routes here
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')

app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)

/***************************************************************************************************************/

const port = process.env.PORT || 6001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

//venuchilukala111
//aOIhxbSVpZG26INI

