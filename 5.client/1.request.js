
//创建http客户端 向其他服务请求数据  
var http = require('http')
var fs = require('fs')
//请求配置项
var option = {
    hostname: 'www.3dker.cn',
    port: 80,
    headers: {name: 'qiasnimin'},
    path: '/article/class',
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
        //写进html
        fs.writeFile('./writeHTML.html', str)
    })
})

//request是个可写流  写入请求体
request.write('hello')
request.end()   //调用end方法的时候才会真正的向服务器发送请求