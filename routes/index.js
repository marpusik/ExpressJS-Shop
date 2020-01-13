var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

const products = [
  {
    img: '/images/pc2.jpg',
    productName: 'comp2',
    price: 700
  },
  {
    img: '/images/pc1.jpg',
    productName: 'computer',
    price: 500
  }
]
/* GET home page. */
router.get('/', async function (req, res, next) {
  const products = await Product.find({})
  res.render('index', { title: 'Express', products: products });
});
router.get('/data', (reg, res) => {
  res.json({ key: 1 })
})

router.get('/contacts', function (req, res, next) {
  res.render('contacts', { title: 'Contacts' });
});

router.get('/product/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('product', { title: 'Product', product: products[req.params.id] });
});

router.get('/test', function (req, res, next) {
  const product = new Product({
    productName: 'Condensed milk', price: 1, currency: '$'
  })
  product.save()
  res.json('ok')
});

router.all('/admin', function (req, res, next) {
  console.log(req.body.productName, req.body.price)
  const product = new Product({
    productName: req.body.productName,
    price: req.body.price,
    currency: req.body.currency,
    img: 'images/pc2.jpg',
  })
  product.save()
  res.render('admin', { title: 'Admin', });
});

router.delete('/product', async function (req, res) {
  console.log(req.body)
  await Product.findOneAndDelete({
    _id: req.body.id
  })
  res.json({ ok: true })
})
module.exports = router;


