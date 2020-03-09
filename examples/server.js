/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-07 17:20:34
 * @LastEditTime: 2020-03-08 23:09:45
 * @LastEditors: seven
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const router = express.Router()
const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
        colors: true,
        chunks: false
    }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/simple/get', function (req, res) {
    res.json({
        msg: `hello world`
    })
})
router.get('/base/get', function (req, res) {
    res.json({
        msg: req.query
    })
})

router.post('/base/post', function (req, res) {
    res.json(req.body)
})
router.post('/base/buffer', function (req, res) {
    let msg = []
    req.on('data',(chunk)=>{
        if(chunk){
            msg.push(chunk)
        }
    })
    req.on('end',(chunk)=>{
        let buf = Buffer.concat(msg)
        res.json(buf.toJSON())
    })
    res.json(req.body)
})


app.use(router)
const port = process.env.PORT || 8081
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})