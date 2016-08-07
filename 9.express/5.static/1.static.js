//EXPRESS 静态文件服务器
var express = require('express');
var app = express()
var path = require('path')
//使用静态文件的中间件 
//static会返回一个函数， 接受一个静态文件目录（绝对路径）作为参数
app.use(express.static(path.resolve('pubilcstatics')))

app.listen(9090)