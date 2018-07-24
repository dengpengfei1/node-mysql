const mysql = require('mysql')
const router = require('./router')
const express = require('express')
const bodyparser = require('body-parser')

let app = express()
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method == 'OPTIONS') {
    res.sendStatus(200) //让options请求快速返回
  }
  else {
    next()
  }
})
app.use(bodyparser.urlencoded({extended: false}))
app.use(router.router)
app.use('/node_modules', express.static('./node_modules'))
app.listen(3000)

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'mysql-study'
// })

// connection.connect()

// let sql = 'insert into person set ?'
// let user = {
//   name: 'f',
//   age: 21,
//   gender: ''
// }

// connection.query(sql, user,function (error, results, fields) {
//   if (error) throw error
//   console.log(results)
// })

// connection.end()