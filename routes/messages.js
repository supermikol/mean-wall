var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/message');


router.post('/', function(req, res, next) {
  console.log(req.body);
  var newMessage = Message({
    name: req.body.name,
    message: req.body.message
  });
  console.log(newMessage);
  newMessage.save(function(err){
    if (err) {
      console.log("Hit error!");
      throw err;
    }
    console.log('saved!');
  })

});

module.exports = router;
