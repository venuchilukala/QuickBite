const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 6001;

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})