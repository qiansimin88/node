var async = require('async')
var fs = require('fs')
var path = require('path')
var util = require('./util')
var test = require('./text/3.test.js')

//并行无关联

async.parallel([
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/1.txt'), cb)
        }, 4000)
    },
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/2.txt'), cb)
        },3000)
    }
], (err, data) => {
    console.log(err)
    console.log(data) //[ '‘这是第一个文件’', '\'这是第二个文件\'' ]   总共花了4s 的时间得到结
})


async.parallel([
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/1.txt'), cb)
        }, 4000)
    },
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/3.txt'), cb)
        }, 3500)
    },
    function (cb) {
        setTimeout(() => {
            util.readFile(path.join(__dirname, 'text/2.txt'), cb)
        },3000)
    }
], (err, data) => {
    console.log(err)
    console.log(data) //[ '‘这是第一个文件’', '\'这是第二个文件\'' ]   总共花了4s 的时间得到结
})