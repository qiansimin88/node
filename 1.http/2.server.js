var fs = require('fs'),              //文件模块
    http = require('http')


http.createServer((req, res) => {
    //解析客户端发送的请求路径
    var url = req.url
    if(url == '/index.html') {
        //readFile不指定编码返回的是Buffer
        fs.readFile('./index.html', (err, data) => {
            //end和write一样也可以传参  不过end是直接结束响应
            res.end(data)
        })
    //如果请求含有这个 就返回这个
    }else if(url == '/style.css') {
        //因为是样式表单 所以要设置响应类型 mimetype可以去百度一下相应的类型
         res.setHeader('Content-type', 'text/css')
         fs.readFile('./style.css', (err, data) => {
             res.end(data)
         })
    }else {
        res.end('404')
    }
}).listen(9090)