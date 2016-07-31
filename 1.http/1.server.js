var http = require('http')


//创建一个简单的服务器
http.createServer((request, response) => {
    console.log(request.method)    //请求的方法 (get/post)）
    console.log(request.url)        //请求的url (/)
    console.log(request.httpVersion)    //http版本号 (1.1)
    console.log(request.headers)        //请求头的对象 

    req.setEncoding('utf-8')   //设置请求的编码
//  { 
//   host: 'localhost:9090',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//   'accept-encoding': 'gzip, deflate, sdch',
//   'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4' 
// }

    response.statusCode = 200           //设置状态吗
    response.setHeader('name', 'qsm')   //设置响应头   key value形式
    response.write('hellow')        //写入响应体    （可以多次写入）
    response.write('world')
    response.end()                  //结束本次响应
})
.listen(9090)
