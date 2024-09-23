const express = require('express')
const app = express()
const port = 3000
var aws = require('aws-sdk');

app.get('/', (req, res) => {
  res.send("Hello World!!!")
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:3000/`)
})