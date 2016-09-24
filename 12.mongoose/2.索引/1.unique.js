var mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
    idCard: {
        type: Number,
        unique: true   //唯一索引  如果插入两个相同的idCard那么第二个将会插入失败 因为是唯一的
    },
    name: {
        type: String,
        index: true    //辅助索引
    }
})