const userModel = require('../model/userModel')

module.exports = {
  showIndexPage (req, res) {
    userModel.getAllUsers((err, results) => {
      if (err) return res.send(404)
      // res.json({
      //   list: results
      // })
      res.json(results)
    })
  },
  addNewUser (req, res) {
    let user = req.body
    // console.log(req);
    console.log(user);
    console.log(req.query);
    userModel.addNewUsers(user, (err, results) => {
      if (err) return res.json({
        msg: '添加失败'
      })
      res.json({
        msg: '添加成功'
      })
    })
  }
}