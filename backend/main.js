const express = require('express')
const app = express()
const port = 3000

const {register} = require('./routes')

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World!!!")
})

app.use('/register', register)

app.listen(port, () => {
  console.log(`http://127.0.0.1:3000/`)
})