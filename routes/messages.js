var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/message');


router.get('/', function(req, res, next){
  Message.find({}, function(err, msgs){
    res.json(msgs);
  })
})

router.post('/', function(req, res, next) {
  var newMessage = Message({
    name: req.body.name,
    message: req.body.message
  });
  newMessage.save(function(err){
    if (err) {
      console.log("Hit error!");
      throw err;
    }
    console.log('saved!');

    Message.find({}, function(err, msgs){
      res.json(msgs);
    });

  });

});

module.exports = router;
