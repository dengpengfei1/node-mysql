const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mysql-study'
})
connection.connect()
module.exports = {
  getAllUsers (cb) {
    connection.query('select * from person order by id asc', cb)
  },
  addNewUsers (user, cb) {
    connection.query('insert into person set ?', user, cb)
  }
}
