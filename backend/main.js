require('dotenv').config();

const serverless = require('serverless-http');
const express = require('express')
const app = express()
const port = 3000

const {user_route, coupon_route, photos_route, setting_route, inquiry_route} = require('./routes')

const middleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key']

    if (apiKey) {
        if (apiKey === process.env.API_KEY_CERTIFICAYION) {
            next()
        } else {
            res.status(403).json({message: 'API Key is invalid'})
        }
    } else {
        res.status(401).json({message: 'API Key is required'})
    }
}

app.use(middleware)
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!!!")
})

app.use('/user', user_route)

app.use('/coupons', coupon_route)

app.use('/photos', photos_route)

app.use('/settings', setting_route)

app.use('/inquiry', inquiry_route)

app.listen(port, () => {
  console.log(`http://127.0.0.1:3000/`)
})

module.exports.handler = serverless(app);