var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var http = require('http')

var port = 3000
var app = express();



//create HTTP server and forward it to our express application
const server = http.createServer(app)

//tell server to listen
server.listen(port)
console.log('server listen on: ', port)

module.exports.app = app