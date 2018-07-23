const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'sqlstudy'
})

module.exports = {
  getAllUsers (cb) {
    return connection.query('select * from users', cb)
  },
  addNewUsers () {

  }
}