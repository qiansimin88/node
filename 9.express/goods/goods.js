
//商品模块

//接受路由对象
module.exports = function (app) {
  app.get('/goods', (req, res) => {
    res.end('goods')
  })
}
