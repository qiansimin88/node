// 建立一个http服务器
// 当用户请求的时候， 会时时抓取百度百家的文章列表并渲染模板


// <a href="http://mbcaijing.baijia.baidu.com/article/569311" 
// target="_blank" mon="col=13&amp;pn=5">汽车产能过剩来袭 4S店已先受内伤</a>

var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    //请求百度百家
   var reqbaijia =  http.request({
        host: 'baijia.baidu.com',
        path: '/',
        method: 'get'
    }, (response) => {
        //可读流
        var str = ''
        response.on('data', (data) => {
            str += data
        })
        response.on('end', () => {
            //抓取百度百家的a链接
            //匹配相应的正则
            var reg = /<a href="http:\/\/.+" target="_blank" mon="col=\d+&pn=\d+">.+<\/a>/g
            var result = str.match(reg)   //匹配到所有的数组
            //获取到页面的所有元素  记得注意补上utf-8 不然就是Buffer了
            var html = fs.readFileSync('./index.html', 'utf-8')
            html = html.replace('{百度百家}', result.join('\n'))

            //返回获取的数据
            res.end(html)
        })
    })
    reqbaijia.end() //发送请求
}).listen(9090)