var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:blog')

var OrderSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true, //自带的必须
        max:1000,
        min:20
    },
    //字符串的枚举验证器
    status: {
        type: String,
        enum: ['new', 'create', 'failed']  //只能是这三个值
    },
    //正则表达式验证字段名
    descripton: {
        type: String,
        match: /order/g   //传到数据库的值必须要有Order字符
    }
})

var OrderModel = mongoose.model('order', OrderSchema)

var order = new OrderModel({
    count: 200
})

order.status = 'new'
order.descripton = 'asdasd'
console.log(order)
//实例添加属性就相当于 {
 //   count： xxx
//}

order.save((err, result) => {
    if(err) {
        return console.log(err)
    }
    console.log('save success')
})