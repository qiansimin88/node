var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.end('index')
})

app.get('/home', (req, res) => {
    res.end('home')
})

app.all('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    res.end('您请求的路径不存在')
})

app.listen(9090)