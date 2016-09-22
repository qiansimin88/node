var async = require('async')
var fs = require('fs')
var path = require('path')
var util = require('./util')
var test = require('./text/3.test.js')

//串行 有关联

// 不报错
async.waterfall([
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/1.txt'), cb)
        }, 3000)
    },
    function (prevData, cb) {
        console.log(prevData)  //‘这是第一个文件’
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/2.txt'), cb)
        },1000)
    }
], (err, data) => {
    console.log(err)    //null
    console.log(data)   //'这是第二个文件'
})

//报错
async.waterfall([
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/1.txt'), cb)
        }, 3000)
    },
    function (prevData, cb) {
        console.log(prevData)  //‘这是第一个文件’
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/3.txt'), cb)
        },1000)
    },
    function (prevData, cb) {
        console.log(prevData)  //根本不会执行这一步
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/2.txt'), cb)
        },1000)
    }
], (err, data) => {
    console.log(err)    //{ [Error: ENOENT: no such file or directory, open '/Users/apple/code/node/7.async/text/3.txt']
                        //errno: -2,
                        //code: 'ENOENT',
                        //syscall: 'open',
                        //path: '/Users/apple/code/node/7.async/text/3.txt' }
    console.log(data)   //'undefined'
})