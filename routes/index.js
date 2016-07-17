var express = require('express');
var router = express.Router();
var Message = require('../models/message')

/* GET home page. */
router.get('/', function(req, res, next) {
  var messages;
  Message.find({}, function(err, msgs){
    res.render('index', { title: 'MEAN Wall', messages: msgs });
    // console.log(msgs);
  })
});

module.exports = router;
