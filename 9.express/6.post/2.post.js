
var express = require('express');
var querystring = require('querystring')
var bodyParser = require('body-parser') //express解析post请求体的中间件 需要npm install 
var app = express()

app.use(bodyParser.json())
//extended: true 表示使用querystring模块把查询字符串转成对象形式
app.use(bodyParser.urlencoded({extended: true}))
//express下面的Post请求   用了bodyParser中间件  req.body就有了属性了
app.post('/reg', (req, res) => {
    console.log(req.body)
   res.send(req.body)  //在路由中输出请求体的对象形式弄得
})

app.listen(9090)