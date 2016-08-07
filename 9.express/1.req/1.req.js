
var express = require('express');
var app = express()
//由于req.port没有这个方法 所以在 中间件 可以自己定义
app.use((req, res, next) => {
    // console.log(req.headers.host)
    
    //得到请求头的host属性
    var host = req.headers.host
    req.port = host.split(':')[1]
    next()
})

app.get('*', (req, res) => {
    console.log(req.hostname)       //主机名
    console.log(req.query)          //get请求查询字符串的队形{ name: 'qiansimin', age: '12' }
    console.log(req.path)           //路径
    console.log(req.params)  
    console.log(req.port)   
    res.end('end')
})

app.listen(9090)