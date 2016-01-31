var express = require('express');

module.exports = function(app) {
  app.use('/static', express.static('./static'));
  
  app.get('/', function(req, res){
    res.render('index', {msg: "Under Construction", username: "tester"});
  });
  
  app.get('/user', function(req, res){
    res.render('user', {msg: "Under Construction"});
  });

  app.get('/signup', function(req, res){
    res.render('signup', {msg: "Under Construction"});
  });

  app.get('/login', function(req, res){
    res.render('login', {msg: "Under Construction"});
  });
  
  app.get('/logout', function(req, res){
    res.redirect('/login');
  });  
};  