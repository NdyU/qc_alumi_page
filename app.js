//Read the environment virables from .env file in the root directory
require('dotenv').config();

// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// set the view engine to pug
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());   // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
  extended: true
}));
//View Router, routes endpoints to view
const router = require('./router');
app.use(router);

module.exports = app;
