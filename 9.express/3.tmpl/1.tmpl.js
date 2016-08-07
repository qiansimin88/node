
var express = require('express')
var path = require('path')

var app = express()
//set存  get取  
// 指定模板引擎
app.set('view engine', 'ejs')

//设置视图的位置
app.set('views', path.join(__dirname, '../4.views'))
// console.log(path.join(__dirname, '../4.views'))

app.get('/', (req, res) => {
    res.render('1.index.ejs', {
        title: 'qiasimin',
        count: 3
    })
})

app.listen(9090)