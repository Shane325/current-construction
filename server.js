'use strict';

/*
 * Module dependencies
 */
let express = require('express');
let app = express();
let router = require('./src/main.routes');
let path = require('path');
let favicon = require('serve-favicon');
const port = process.env.PORT || 8080;

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Create a static directory
app.use(express.static('public'));

// Set the view engine
app.set('view engine', 'ejs');

// Apply application routes
app.use(router);

// Start application
app.listen(port);
console.log('Server listening on port', port);
