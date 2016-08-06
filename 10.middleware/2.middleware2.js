var express = require('express');
var app = express()


// 程序要求
// 1.接受路径参数
// 2.判断路径参数的age是否大于18， 大于继续， 小于返回太小

//中间件可以接受一个Path
app.use('/user/:age', (req, res, next) => {
    console.log(~~req.params.age)
    var age = req.params.age
    if(~~age > 18) {
        next()   //通过 由路由接入
    }else {
        res.end('you are less than 18 years old!!!')
    }
})


app.get('/user/:age', (req, res) => {
    //配置模糊匹配的路由后 express就有了req.params的方法 得到一个参数对象 key value形式
    console.log(req.params)
    res.end('welcome this site')
})

app.listen(9090)
