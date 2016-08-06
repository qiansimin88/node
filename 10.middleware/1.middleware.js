var express = require('express');
var app = express()

//中间件
// 修改后的请求和响应可以继续往下传递
// 用来进行一些公用的设置和添加一些公用的方法
//每个中间件都有权利选择继续执行还是就此终止


//不填path  每个请求都要经过中间件
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    next()
})

app.get('/', (req, res) => {
    console.log(res.getHeader('Content-Type'))
    res.send('欢迎来到首页')
})

app.get('/user', (req, res) => {
    res.send('欢迎来到用户页面')
})

app.listen(9090)
