//node请求自己的服务器

//创建http客户端 向其他服务请求数据  
var http = require('http')
var fs = require('fs')
//请求配置项
var option = {
    hostname: 'localhost',
    port: 9090,
    headers: {name: 'qiasnimin'},
    path: '/',
    method: 'get'
}

// http.request(option, callback)


//请求是个可读流
var request = http.request(option, (res) => {
    var str = ''
    res.setEncoding('utf-8')
    res.on('data', (data) => {
        str += data
    })

    res.on('end', () => {
        console.log(str)  //打印出自己服务器返回的hello
    })
})

//request是个可写流  写入请求体
request.write('1234')
request.end()   //调用end方法的时候才会真正的向服务器发送请求