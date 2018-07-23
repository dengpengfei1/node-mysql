const userModel = require('../model/userModel')

module.exports = {
  showIndexPage (req, res) {
    userModel.getAllUsers((err, results) => {
      if (err) return res.send('')
      res.render('index', {
        list: results
      })
    })
    res.send('index')
  },
  getList (req, res) {
    res.send([
      {
        name: 'a',
        age: 10
      },
      {
        name: 'b',
        age: 20
      },
      {
        name: 'c',
        age: 30
      },
      {
        name: 'd',
        age: 40
      },
      {
        name: 'e',
        age: 50
      },
      {
        name: 'f',
        age: 60
      }
    ])
  }
}