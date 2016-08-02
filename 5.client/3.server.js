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
        // console.log(req.headers['content-type'])
        var requestType = req.headers['content-type']
        //如果请求的类型是json
        if(requestType == 'application/json') {
            // res.end(JSON.parse(str))
        }
        res.end(str)
    })
}).listen(9090)