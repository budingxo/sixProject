const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/0209').then(rep => {
  console.log('连接成功2');
}).catch(err => {
  console.log('连接失败2');
})


const kaovaluechema = new mongoose.Schema({
  name: String,
  value: Number
})
const kaovalueModel = mongoose.model('kaovalue', kaovaluechema, 'kaovalue')

// 0212 商品
const gotochema = new mongoose.Schema({
  name: String,
  price: Number,
  title: String,
  img: String,
})
const gotoModel = mongoose.model('goto', gotochema, 'goto')

// 0227 B站
const Bchema = new mongoose.Schema({
  name: String,
  img: String,
})
const BModel = mongoose.model('B', Bchema, 'B')

module.exports = { kaovalueModel,gotoModel,BModel }