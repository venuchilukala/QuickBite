const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()


//middleware
app.use(cors())
app.use(express.json())

//mongodb config

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@quickbite.jfgqt.mongodb.net/?retryWrites=true&w=majority&appName=quickbite`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    
    //database and collection
    const menuCollections = client.db("quickbite-db").collection("menus")
    const cartCollections = client.db("quickbite-db").collection("cartItems")
    
    //all menu items operation
    app.get('/menu', async(req, res)=>{
        const result = await menuCollections.find().toArray();
        res.send(result);
    })

    //Cart Operations :==>
    //adding cart item to db
    app.post('/carts', async(req, res) =>{
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem)
      res.send(result)
    })

    //get cart items based on email
    app.get('/carts', async(req, res) =>{
      const email = req.query.email 
      const filter = {email : email}
      const result  = await cartCollections.find(filter).toArray()
      res.send(result)
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


const port = process.env.PORT || 6001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


//venuchilukala111
//lN0C1CWUZY4jPUwn

