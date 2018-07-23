const express = require('express')
const controller = require('./controller/userCtrl')

let router = express.Router()

router
  .get('/', (req, res) => {
    controller.showIndexPage(req, res)
  })
  .get('/list', (req, res) => {
    controller.getList(req, res)
  })

exports.router = router
