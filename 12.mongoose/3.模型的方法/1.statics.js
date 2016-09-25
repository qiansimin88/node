var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog')

mongoose.connection.once('open', function () {
    console.log('mongo is work')
})


var PersonSchema = new mongoose.Schema({
    name: String,
    idCard: {
        type: Number,
        unique: true
    }
})

//给schema添加静态方法   最终模型就会有这个方法
//模型静态方法
PersonSchema.statics.findIdCard = function (idCard, cb) {
    this.findOne({
        idCard: idCard
    }, function (err, doc) {
        cb(err, doc)
    })
}

var PersonModel = mongoose.model('Idcard', PersonSchema)

//声明实例

var Person = new PersonModel({
    name: 'qiansimin',
    idCard: 342601
})

Person.save(function (err, doc) {
    if(err) {
        return console.log('save fail')
    }

    if(doc) {
        console.log(doc)
    }

    //模型查询  使用静态方法
    PersonModel.findIdCard(342601, function (err, doc) {
        console.log('-----------------')
        console.log(err, doc)
    })
})