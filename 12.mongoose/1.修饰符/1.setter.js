var mongoose = require('mongoose')
var colors = require('colors')
var db = mongoose.connect('mongodb://localhost/blog')

db.connection.once('open', () => {
    console.log('datebase is open on'.green)
})

/**
 * Schema里的set和get的区别就是一个是存数据库的处理 一个 是从数据库里面取数据时候的处理
 */


//声明model   schema可以直接{}   没必须new mongoose.Schema({})这样写
var User = mongoose.model('User', {
    nickname: {
        type: String,
        trim: true   //去除前后空格的修饰符
    },
    blogUrl: {
        type: String,
        set: function (url) {      //字符串进行一些处理 比如这里检查url 
            if(!url) return url
            if(0 !== url.indexOf('http://')) {
                //如果没有http://头  进行自动补全
                url  = 'http://' + url
                return url
            }
        }
    }
})

//声明实体
var newUser = new User({
    nickname: '   qsm    adad  ',
    blogUrl: '3dker.cn'
})


console.log(newUser) //{ nickname: 'qsm    adad', _id: 57e6983ca357c7011dade9d4 }