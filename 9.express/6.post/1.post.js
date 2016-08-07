var express = require('express');
var querystring = require('querystring')
var app = express()

//处理Post请求体的中间件
app.use((req, res, next) => {
 var str = ''
    //请求流的时候要给 encodeing
    req.setEncoding('utf8')
    //请求体是个可读流
    req.on('data', (data) => {
        str += data
    })
    
    req.on('end', () => {
        //根据头信息来返回相应类型的数据
        var contentType = req.headers['content-type']
        if(contentType === 'application/x-www-form-urlencoded') {
            //把查询字符串  name=qiansmin&age=18  转成对象
            req.body = querystring.parse(str)
        }else if(contentType === 'application/json') {
            req.body= JSON.parse(str)
        }
        //因为是异步的  所以要写在回调里面才行
       next()
    })
})

//express下面的Post请求
app.post('/reg', (req, res) => {
    console.log(req.body)
   res.send(req.body)  //在路由中输出请求体的对象形式弄得
})

app.listen(9090)