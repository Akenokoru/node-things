const express = require('express');
const app = express();
// 配置模板引擎
app.set('view engine', 'ejs');
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