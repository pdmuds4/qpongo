const express = require('express')
const app = express()
const port = 3000

const {user_route, coupon_route, photos_route} = require('./routes')

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World!!!")
})

app.use('/user', user_route)

app.use('/photos', photos_route)

app.listen(port, () => {
  console.log(`http://127.0.0.1:3000/`)
})