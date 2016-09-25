var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog')

mongoose.connection.once('open', function () {
    console.log('mongo is work')
})


var PersonSchema = new mongoose.Schema({
   address: String 
})


//该schema所有的模型 在save（）之后执行的中间件
PersonSchema.post('save', function (next) {
    console.log('模型save完毕');
    next();
})

var PersonModel = mongoose.model('demo', PersonSchema)

//声明实例

var Person = new PersonModel({
   address: 'qiansshancun'
})

Person.save()