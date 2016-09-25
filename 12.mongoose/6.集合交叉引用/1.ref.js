var mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/blog')

db.connection.once('open', function () {
    console.log('mongodb is working - - ')
})


//先建立两个表

//用户表
var userModel = db.model('articleUser', {
    username: String
})

//文章表
var articleModel = db.model('articleList', {
    title: String,
    author: {
        type: db.Schema.ObjectId,     //mongoose的oBjectiD类型
        ref: 'articleUser'            //引用的集合 所以该模型上的author字段都必须要引用articleUser上的文档
    }
})

//声明两个实例
var user = new userModel({
    username: '钱思敏'
})

var article = new articleModel({
    title: '羊脂球',
    author: user  //引用某个文档
})


user.save((err, doc) => {
    article.save((err, doc) => {
        // console.log(doc)
        //{ __v: 0,
          // title: '羊脂球',
          // author: { __v: 0, username: '钱思敏', _id: 57e7f11c6ad457a712fa13ce },
          // _id: 57e7f11c6ad457a712fa13cf }
        //populate填  想查看的字段 即可
         articleModel.findOne({title:'羊脂球'}).populate('author').exec((err, doc) => {
            console.log(doc)
         })
    })
})

