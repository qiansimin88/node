var url = require('url'),
    str = 'https://github.com:8082/qiansimin88/node?name=qsm&age=18#hehe'
//url转成对象   第二个参数为true就把query转成对象
console.log(url.parse(str, true))

// {
//   protocol: 'https:',   协议
//   slashes: true,    是否有//
//   auth: null,    用户名和密码
//   host: 'github.com:8082', 主机
//   port: '8082',     端口
//   hostname: 'github.com',   域名
//   hash: '#hehe',            
//   search: '?name=qsm&age=18',   
//   query: 'name=qsm&age=18',     查询字符串
//   pathname: '/qiansimin88/node',    路径
//   path: '/qiansimin88/node?name=qsm&age=18', Pathname+search
//   href: 'https://github.com:8082/qiansimin88/node?name=qsm&age=18#hehe' 原始url
// }



//对象转成url
var urlobj = url.parse(str)
console.log(url.format(urlobj))

// https://github.com:8082/qiansimin88/node?name=qsm&age=18#hehe
