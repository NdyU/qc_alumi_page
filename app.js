// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');

// set the view engine to pug
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//router.js define all routes in this server
const router = require('./router');
// Passing app to routers, using router.js to define all the routes
router(app);

module.exports = app;
