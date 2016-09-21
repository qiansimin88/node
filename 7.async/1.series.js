var async = require('async')
var fs = require('fs')
var util = require('./util')
var test = require('./text/3.test.js')

async.series([
	function (cb) {
		util.readFile()
	}
], (err, data) => {

})