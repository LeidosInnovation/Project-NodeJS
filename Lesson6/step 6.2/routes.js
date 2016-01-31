var express = require('express');

modules.exports = function(app) {
  app.use('/static', express.static('./static'));
  
  app.get('/', function(req, res) {
	  //+ add temp user data
	  req.session.userID = "test";
	  req.session.username = "tester";
	  req.session.msg = "Testing Sessions";
	  
	  //+ add session verify
	  if(req.session.userID) {
		 res.render('index', { username: req.session.username,
		                       msg:req.session.msg});
	  } else {
		  req.session.msg = "Access Denied!";
		  res.redirect('/login');
	  }
  });
  
  app.get('/user', function(req, res) {
	  //+ add session verify
	  if (req.session.userID) {
		  res.render('user', {msg:req.session.msg});
	  } else {
		  req.session.msg = "Access Denied!";
		  res.redirect('/login');
	  }
  });
  
  app.get('/signup', function(req, res) {
	  res.render('signup', {msg:req.session.msg});
  });
  
  app.get('/login', function(req, res) {
	  res.render('login', {msg:req.session.msg});
  });
  
  app.get('/logout', function(req, res) {
	  //+ add destroy to clear session
	  req.session.destroy(function(){
		 res.redirect('/login');
	  });
  });  
};