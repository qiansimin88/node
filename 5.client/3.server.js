var http = require('http')

http.createServer((req, res) => {
    console.log(req.headers.host)
    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)

    var str = ''
    //读取请求体   
    req.on('data', (data) => {
        str += data
    })
 
    req.on('end', (data) => {
        //返回请求体的数据
        res.end(str)
    })
}).listen(9090)