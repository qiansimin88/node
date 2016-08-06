
//用户模块

//接受路由对象
module.exports = function (app) {
  app.get('/reg', (req, res) => {
    console.log(req.url)
    res.end('reg')
  })
}
