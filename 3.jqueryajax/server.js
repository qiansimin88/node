var http = require('http'),
    path = require('path'),
    url = require('url'),
    fs = require('fs'),
    util = require('util')
    querystring = require('querystring')


var server = http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname   //路径
        
        console.log(pathname)
        //如果访问首页 就返回html
        if(pathname == '/') {
            fs.createReadStream('./index.html').pipe(res)
        }else if(pathname == '/clock') {
            var str = ''
            //请求是个数据流 需要累加
            req.on('data', (data) => {
                str += data
            })
            req.on('end', () => {
                console.log(str)
                res.end(str)
            })
        }else {
            res.statusCode = 404
            res.end()
        }
       
}).listen(9090)