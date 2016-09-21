var fs = require('fs')
module.exports = {
	//异步返回读取的文件内容
	readFile (filePath, cb) {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			cb(err, data)
		})
	}
}