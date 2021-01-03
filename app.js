const express = require('express');
const ejs = require('ejs');
const app = express();
// 配置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');
// 配置静态web目录
app.use(express.static('static'));
// ejs渲染页面路由
app.get('/index', (req, res) => {
  let title = '首页'
  let header = '<h3>Header</h3>'
  res.render('index', {
    title: title,
    header: header
  })
})
// 动态路由
app.get('/index/:id', (req, res) => {
  const id = req.params.id
  console.log('id: ', id);
  res.send(id)
})
// 获取search
app.get('/query', (req, res) => {
  const query = req.query
  console.log(query, 'query')
  res.send(query)
})
// post
app.post('/doLogin', (req, res) => {
  console.log('login', req, res)
  res.send('login')
})

app.listen(3000)