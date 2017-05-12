var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var http = require('http')

var config = require('./config/')
const helpers = require('./helpers')
const middleware = require('./middleware')
var app = express();


config.init(app)

//server setup
const port = process.env.PORT || config.port

//create HTTP server and forward it to our express application
const server = http.createServer(app)

//tell server to listen
server.listen(port)
console.log('server listen on: ', port)

module.exports.app = app