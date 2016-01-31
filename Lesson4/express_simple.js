var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var response = "<h2>Your Request</h2>";
  response += "URL:\t    " + req.originalUrl + "<br>";
  response += "Protocol:   " + req.protocol + "<br>";
  response += "IP:    " + req.ip + "<br>";
  response += "Path:   " + req.path + "<br>";
  response += "Host:    " + req.host + "<br>";
  response += "Method:    " + req.method + "<br>";
  response += "Query:    " + JSON.stringify(req.query) + "<br>";
  response += "Secure:    " + req.secure + "<br>";
  response += "UTF8:    " + req.acceptsCharset('utf8') + "<br>";
  response += "Connection:    " + req.get('connection') + "<br>";
  response += "Headers:    " + JSON.stringify(req.headers) + "<br>";
  res.send(200, response);
});

app.listen(80);