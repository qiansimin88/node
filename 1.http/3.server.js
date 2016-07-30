// 使用Mime-type来自动配置响应类型

var fs = require('fs'), // 文件模块
  http = require('http'),
  mime = require('mime') // 自动响应类型

http.createServer((req, res) => {
  // 解析客户端发送的请求路径
  var url = req.url

  // 先判断资源是否存在 返回布尔值
  fs.exists(`.${url}`, exists => {
      console.log(exists)
    if (exists) {
      // mime的lookup方法 自动响应请求的类型
      res.setHeader('Content-type', mime.lookup(url))
      console.log(`.${url}`)
      fs.readFile(`.${url}`, (err, data) => {
        res.end(data)
      })
    }else {
        //防止中文乱码
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 404 
        res.end('您要找的资源不存在')
    }
  })
}).listen(9090)
