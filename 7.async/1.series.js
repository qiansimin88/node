var async = require('async')
var fs = require('fs')
var path = require('path')
var util = require('./util')
var test = require('./text/3.test.js')

//串行 无关联
async.series([
	function (cb) {
		setTimeout(() => {
			util.readFile(path.join(__dirname, 'text/1.txt'), cb)
		}, 3000)
	},
	function (cb) {
		setTimeout(() => {
			util.readFile(path.join(__dirname, 'text/2.txt'), cb)
		},1000)
	}
], (err, data) => {
	console.log(err)
	console.log(data)
})