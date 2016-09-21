var cache = require('memory-cache')


cache.put('test', '1', 100)


setTimeout(function () {
    console.log(cache.get("test"))
},110)

console.log(cache.get("test"))