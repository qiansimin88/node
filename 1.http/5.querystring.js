var querystring = require('querystring')

var str = 'name=qiansimin&age=18'

console.log(querystring.parse(str))
//{ name: 'qiansimin', age: '18' }


//不固定格式的转化
var str = 'name===qiansimin*age===18'
console.log(querystring.parse(str, '*', '==='))
//{ name: 'qiansimin', age: '18' }

// 二 把对象转成字符串
console.log(querystring.stringify({ name: 'qiansimin', age: '18' }))
//name=qiansimin&age=18