var mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/blog')

db.connection.on('open', () => {
    console.log('数据库连接成功')
})

//单独声明schema
var UserSchema = new db.Schema({
    blogUrl: {
        type: String,
        get: function (url) {
            if(!url) return url;
            if(url.indexOf('http://') !== 0) {
                return 'http://' + url
            }
        }
    }
})

//声明模型 
var Test = db.model('Test', UserSchema)

//声明实体
var Testentity = new Test({
    blogUrl: 'baidu.com'
})
Testentity.save( (err, data) => {
    if(err) {
        return console.log(err)
    }
    console.log(data) //存入成功
    console.log('blog url', Testentity.blogUrl) //blog url http://baidu.com  取数据的时候会自动加上http://,虽然数据库里面依旧是没有http://的
})

