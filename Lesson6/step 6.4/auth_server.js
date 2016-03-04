var express = require('express');

//+ add modules for body parse and session store
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});

//+ connect to MongoDB
var dbConn = require('./db_connection');
dbConn.getDBConnection(function(currentDB) {
	var app = express();
	app.engine('.html',require('ejs').__express);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	
	//+ add session store
	app.use(bodyParser());
	app.use(cookieParser('SECRET'));
	app.use(expressSession({
		secret: 'SECRET',
		cookie: {maxAge: 60000 * 15},
		store: new mongoStore({
			db: currentDB,
			collection: 'sessions'
		})
	}));
	
	require('./routes')(app);
	
	app.listen(80);
});