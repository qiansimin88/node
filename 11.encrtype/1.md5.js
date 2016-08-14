var crypto = require('crypto');
/**
 * md5
 * 可以将任意的二进制数据转成固定长度的字符串
 * 1. 不同的输入肯定会产生不同的输出
 * 2. 相同的输入肯定会产生相同的输出
 * 3. 无法从输出推算出输入
 *
 * 1.密码 在保存到数据库中的时候先加密再保存
 * 2.校验 如果文件被篡改过，那么生成的md5肯定不一样
 */
// console.log(crypto.getHashes());
var s = crypto.createHash('sha256').update('1')
.update('2').digest('hex');
console.log(s);

var s = crypto.createHash('sha256').update('1')
    .update('2').digest('hex');
console.log(s);