var express = require('express');

module.exports = function(app) {
  app.use('/static', express.static('./static');
  
  app.get('/', function(req, res) {
    //+ remove temp user
	if(req.session.userID) {
	  res.render('index', {username: req.session.username,
	                       msg:req.session.msg});
	} else {
	  req.session.msg = 'Access denied';
	  res.redirect('/login');
	}  
  });
  
  app.get('/user', function(req, res) {
    if (req.session.userID) {
	  res.render('user', {msg:req.session.msg});
	} else {
	  req.session.msg = 'Access denied!';
	  res.redirect('/login');
	}  
  });
  
  app.get('/signup', function(req, res) {
	res.render('signup', {msg:req.session.msg});	  
  }

  app.get('/login', function(req, res) {
	res.render('login', {msg:req.session.msg});	  
  }  
  
   app.get('/logout', function(req, res) {
	req.session.destroy(function() {
	  res.rdirect('/login');
	});
  });

  //+^ add routes to interact with user_controller & database
  var users = require('./users_controller');
  app.post('/signup', users.signup);
  app.post('/user/update', users.updateUser);
  app.post('/user/delete', users.deleteUser);
  app.post('/login', users.login);
  app.get('/user/profile', users.getUserProfile);
};  

  
}  