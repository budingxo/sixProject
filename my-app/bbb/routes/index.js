var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var path = require('path');


const GLOBAL_CONFIG = require('../config/index')
// 文件上传
router.post('/upload',(req,res)=>{
  var form = new multiparty.Form({
    uploadDir:'uploads'
  });
  form.parse(req,function (err,fields,files) {
    let img1 = path.basename(files.file[0].path) //获取上传
    let imgUrl1 = GLOBAL_CONFIG.url + '/uploads/' + img1
    res.send({
      code: 200,
      msg: '上传成功',
      result: {
        imgUrl1:imgUrl1,
        imgUrl2:img1
      }
    })
  })
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
