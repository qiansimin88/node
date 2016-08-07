
var express = require('express');
var path = require('path')
var app = express()

//send()可以接收任意类型 除了数字

app.get('/html', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.get('/json', (req, res) => {
    res.send({"name": 'qiansimin'})
})

//sendFile绝对路径才可以
app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./2.index.html'))
})

app.listen(9090)