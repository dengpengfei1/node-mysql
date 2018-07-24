const express = require('express')
const controller = require('./controller/userCtrl')

let router = express.Router()

router
  .get('/', (req, res) => {
    // controller.showIndexPage(req, res)
    // res.send('index')
  })
  .get('/list', (req, res) => {
    controller.showIndexPage(req, res)
  })
  .post('/add', (req, res) => {
    controller.addNewUser(req, res)
  })

exports.router = router
