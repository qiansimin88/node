var express = require('express')
var app = express()
//引入配置
require('./user/1.user')(app)

app.listen(9090)