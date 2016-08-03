//node请求自己的服务器

//创建http客户端 向其他服务请求数据  
var http = require('http')
var fs = require('fs')
//请求配置项
var option = {
    host: 'localhost',
    port: 9090,
    headers: {'Content-Type': 'application/json'}, //设置请求头是 json
    path: '/',
    method: 'post'    //只有post请求才能发请求体
}

// http.request(option, callback)


//请求是个可读流
var request = http.request(option, (res) => {
    var str = ''
    
    //不设置编码  得到的是buffer
    res.setEncoding('utf-8')
    //接受服务器返回来的响应
    res.on('data', (data) => {
        str += data
    })

    res.on('end', () => {
        console.log(str)  //打印出自己服务器返回的hello
    })
})

//request是个可写流  写入请求体
request.write(JSON.stringify({name: 'qiansimin'}))
request.end()   //调用end方法的时候才会真正的向服务器发送请求