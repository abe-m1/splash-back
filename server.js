const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const http = require('http')

const routes = require('./routes')
const config = require('./config/')
const helpers = require('./helpers')
const middleware = require('./middleware')
const app = express();

middleware.init(app)
config.init(app)

//server setup
const port = process.env.PORT || config.port

//create HTTP server and forward it to our express application
const server = http.createServer(app)

//tell server to listen
server.listen(port)
console.log('server listen on: ', port)

module.exports.app = app