
//session存储在服务器端  关闭浏览器就没了

var http = require('http')
var fs = require('fs')
var url = require('url')
var querystring = require('querystring')

var SESSION_KEY = "SESSION_KEY"

//用来存储用户信息的对象
var sessionStore = {}

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true)
    var pathname = urlObj.pathname

    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    if(pathname == '/') {
        //拿到客户端之前存的cookie  服务端定义的session_key字段
        //node的header里面的参数都是小写的
        var CookieObj = querystring.parse(req.headers.cookie, ';')

        var sessionID = CookieObj[SESSION_KEY.toLowerCase()]
        //老用户
        if(sessionID) {
             var balanceObj = sessionStore[sessionID]
             balanceObj.balance -= 10
             res.end('尊敬的vip用户，您的月还有'+balanceObj.balance)
        }else {
            //生成一个随机数
            var sid = Date.now() + Math.random()
            //预设100元  意味着在服务器端开辟内存 
            sessionStore[sid] = {balance: 100}
            //写给客户端的cookie
            res.setHeader('set-Cookie', SESSION_KEY + '=' + sid)
            res.end('欢迎你新朋友，您将获得100元的VIP')
        }
    }
}).listen(8080) 