var express = require('express');
var router = express.Router();
const multiparty = require('multiparty');
// 引入token
const jwt = require('jsonwebtoken')
let tokenMIYao = "miyao123456"
const GLOBAL_CONFIG = require('../config/index')

const { kaovalueModel,gotoModel,BModel } = require('../db/db');



async function bnm() {
  let op = {};
  op.name = '必看!DeepSeek从入门到精通!这11个高阶技巧,让你的效事提...'
  op.img = 'https://18104820.s21i.faiusr.com/4/ABUIABAEGAAgzO_X6wUo8LeS3AEw0wk4rwY.png'
  await BModel.create(op)
  let data = await BModel.find()
  console.log(data,'创建成功')
}
// bnm()

router.get('/getlist',async (req,res) => {
  let data = await BModel.find()
  res.send({
    code: 200,
    data: data
  })
})

















// 0212 
// async function cnm() {
//   let op = {};
//   op.name = '巨兽蛋'
//   op.price = 996
//   op.title = '据说可以孵化出恐龙也不一定哦'
//   op.img = 'https://pic1.zhimg.com/v2-53df49c8f529310798273e68f7018d58_b.jpg'
//   await gotoModel.create(op)
//   let data = await gotoModel.find()
//   console.log(data,'创建成功')
// }
// // cnm()

// router.get('/gotulist',async (req,res) => {
//   let data = await gotoModel.find()
//   res.send({
//     code: 200,
//     data: data
//   })
// })



// async function nm() {
//   let op = {};
//   op.name = "Group D"
//   op.value = 300
//   await kaovalueModel.create(op)
//   let data = await kaovalueModel.find()
//   console.log(data,'创建成功')
// }
// // nm()


// router.get('/kaoOne',async (req,res) => {
//   let data = await kaovalueModel.find()
//   res.send({
//     code: 200,
//     data: data
//   })
// })






/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
