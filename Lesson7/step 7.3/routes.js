var express = require('express');

module.exports = function(app) {
  app.use('/', express.static('./static'));
  
  var words = require('./controllers/words_controller');
  app.get('/words', words.getWords);
};