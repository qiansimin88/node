var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
  var reqMethods = req.method
  //浏览器直接输入localHost:9090/reg 就相当于 Get请求
  if (req.url == '/reg') {
    if (reqMethods === 'GET') {
        fs.readFile('./form.html', (err, data) => {
            console.log(data.toString()) //打印当前的html
            res.end(data)
        })
    }else if (reqMethods === 'POST') {
        //post请求  客户端主动发送的请求 比如表单的提交  request是一个可读流 所以可以用  on的方法
        var result = ''
        //设置请求流的编码变成字符串     不然数据就默认成了buffer了
        req.setEncoding('utf8')
        req.on('data', data => {
            //因为data是持续流 所以必须累加 有可能含有中文 所以要解码 比较靠谱
            result += decodeURIComponent(data)
        })
        //当所有的数据传输结束  触发end事件
        req.on('end', () => {
            //post表单请求 会把表单key value转成查询字符串放在请求体中
            console.log(result)  //打印执勤累加的数据
            //设置响应类型
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(result)
        })
    } 
  }else {
    res.end('not found')
  }
}).listen(9090)
