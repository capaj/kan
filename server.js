/**
 * Module dependencies.
 */
var koa = require('koa');
var serve = require('koa-static');
var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var logger = require('koa-logger');
var router = require('koa-router');
/**
 * Environment.
 */
var env = process.env.NODE_ENV || 'development';
var port = 8080;

var app = koa();

// logging

if ('test' != env) app.use(logger());

// x-response-time

app.use(responseTime());

// compression

app.use(compress());

// routing

app.use(router(app));

app.use(serve(__dirname + '/public/'));
// boot
app.listen(port);

module.exports = app;