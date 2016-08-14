var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://127.0.0.1:27017/person') //链接的ip地址

db.connection.on('error', (err) => {
    console.log('数据库连接失败'+err)
})

db.connection.on('open', () => {
    console.log('数据库连接成功')
})

//定义schema
var PersonSchema = new mongoose.Schema({
    name : {type: String},
    age : {type: Number, default:0},
    time : {type: Date, default: Date.now()},
    email: {type:String, default:''}
})

//创建模型    第一个参数是集合名字，第二个是schema
var PersonModel = db.model('students', PersonSchema)

 //创建entity实体 参数就是schema定义的字段
 var personEntity = new PersonModel({
     name: 'qiansimin',
     age: 12,
     email: '348867341@qq.com'
 })

//保存
personEntity.save((err, doc) => {
    if(err) {
        console.log('error'+err)
    }else {
        console.log(doc)
    }
})

//查询所有的文档  通过模型来查询
PersonModel.find({}, (err, doc) => {
    if(err) console.log(err)
    console.log(doc)    
})