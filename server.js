var env = process.env.NODE_ENV || 'development';
var express = require('express');
var app = express();
var port = 8283;

var morgan = require('morgan');

if (env === 'production') {
	app.use(morgan('combined'));
}
if (env === 'development') {
	app.use(require('connect-livereload')({
		port: 35939
	}));

	app.use(morgan('dev'));
}

app.use(express.static('./public/'));

app.listen(port).on('listening', function() {
	console.log('server started in ', env, ' on port ', port);
});

module.exports = app;