var path = require('path')


// 这个API和当前文件的路径没任何关系，仅仅是处理所传入的path路径的方法，将其返回成一个标准的路径：
// 1.解析.和..
// 2.多个斜杠会转成一个斜杠
// 3.window下的斜杠\会转换成/
// 4.结尾斜杠会保留
// 5.返回最终的路径
//a/b/c../d
console.log(path.normalize('./a/b////c../d'))




// 这个API和当前文件的路径没有关系，相当于把所传入的任意多的参数 按照顺序 进行命令行般的推进，
//就相当于在命令行中输入传入的参数，最终返回相应的路径，比如path.join('a','b','../c/lolo')==> a/c/lolo
//a/c/lolo
console.log(path.join('a','b','../c/lolo'))



// 以当前文件的路径为起点，返回绝对路径
// 1.以应用程序为根起点
// 2.解析 ... .
// 3.普通字符串代表子目录
// 4./代表盘符下面的根目录
// 5.如果遇到后面有/ 则忽略前面的所有路径 以/为起点
///Users/apple/code/node/2.path/a/c/lolo
console.log(path.resolve('a','b','../c/lolo'))



// 返回p2相对于p1的路径，简单的理解就是p1可以通过该函数的返回值到达p2
//../express
console.log(path.relative(__filename, 'typings/../express'))


//返回指定的路径 所在文件夹的绝对路径
///Users/apple/code/node/2.path
console.log(path.dirname(__filename))

//返回指定Path路径所在问价的名字
//2.server.js
console.log(path.basename('../1.http/2.server.js'))