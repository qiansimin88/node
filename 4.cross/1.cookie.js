var http = require('http')
var querystring = require('querystring')

//缓存用户访问的信息的变量
var visit = {

}

http.createServer((req, res) => {
 res.setHeader('Content-Type', 'text/html;charset=utf-8')
  var url = req.url
  if (url === '/hehe') {
      //统一是小写
    var getCookie = req.headers.cookie
    // 转成对象形式
    var cookieObj = querystring.parse(getCookie)
    // 判断客户端是否是第一次访问
    if (cookieObj && cookieObj.name) {
        visit[cookieObj.name] = visit[cookieObj.name] + 1
        res.end(`你是第${visit[cookieObj.name]}次访问`)
    }else {
      // 给客户端设置cookie
      res.setHeader('Set-Cookie', `name = ${Date.now()}`)
      visit[Date.now()] = 1
      res.end('你是第一次访问本网站哦')
    }
  }
}).listen(9090)
