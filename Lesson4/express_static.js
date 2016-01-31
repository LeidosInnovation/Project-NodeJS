var express = require('express');
var app = express();

app.use(express.static(__dirname+"/static"));

app.get('/', function(req,res) {
  res.redirect('/static.html');
});

app.listen(80);