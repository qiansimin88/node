var express = require('express')
var app = express()
var session = require('express-session')
//使用这个中间件后  req就会有session的属性了  req.session
app.use(session({
    resave: true,  //每次请求结束 都要重新保存 不管有没有修改
    saveUninitialized: true, //保存未修改的session
    secret: 'qsm' //加密的秘钥
}))

app.get('/', (req, res) => {
    //读cookie 
    var isLogin = req.session.isLogin
    if(isLogin) {
        res.send('老朋友')
    }else {
        //写 cookie
        req.session.isLogin = 'true'
        //express提供的send方法
        res.send('新朋友')
    }
})

app.listen(8080)