//虚拟属性
/**
 *虚拟属性就是那种通过计算获得的隐藏属性，不需要明确的在schema当中声明的属性
 *比如说schema有的firstname和lastName,那么没必要在声明fullname了，可以自己用
 *虚拟属性自动补充fullname  
 */
var mongoose = require('mongoose')


var PersonSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
})

//给schema增加虚拟属性
PersonSchema.virtual('fullname').get(function() {
    //这里的get是获取的意思 意味着要return一个返回值即可
    return this.firstname + ' ' + this.lastname
})
//对schema进行设置  当打印json的时候 显示虚拟属性
PersonSchema.set('toJSON', {
    getters: true,
    virtual: true 
})

//声明模型
var PersonModel = mongoose.model('Test1', PersonSchema)

//声明实体
var person = new PersonModel({
    firstname: 'qian',
    lastname: 'simin'
})

console.log(person)   //这样是看不到的

console.log(person.fullname) //qian simin

console.log(JSON.stringify(person))  //有了

console.log(person.toJSON())  //{ firstname: 'qian',
                               //   lastname: 'simin',
                                //  _id: 57e6a6ae03f8ceed21cea5da,
                                 // fullname: 'qian simin',
                                  //id: '57e6a6ae03f8ceed21cea5da' }