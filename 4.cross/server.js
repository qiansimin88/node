var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function(req,res){
    if(req.url == '/ajax'){
        写头并且具有  状态值
        res.writeHead(200,{
            //允许哪个来源访问我这个资源
            "Access-Control-Allow-Origin":"*"
        });
        res.end('ok');
    }
}).listen(9090); 