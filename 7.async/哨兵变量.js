var fs = require('fs')

//当多个异步全部完成的时候 执行 回调函数

function waitAllSync (callback){
    var count = 0 //哨兵变量  用来检测某个值是否达到阈值
    var one = null 
    var two = null 

    //因为readFile是异步的方法 所以判断count的方法必须写在回调才能起作用
    //两个异步回调  哪个最后执行完 就执行最终的回调
    fs.readFile('./1.txt', 'utf8', (err, data) => {
        one = data
        count ++
        if(count === 2) {
            callback(one, two)
        } 
    })

    fs.readFile('./2.txt', 'utf8', (err, data) => {
        two = data
        count ++ 
        if(count === 2) {
            callback(one, two)
        } 
    }) 
}

waitAllSync((one, two) => {
    console.log(one, two)
})