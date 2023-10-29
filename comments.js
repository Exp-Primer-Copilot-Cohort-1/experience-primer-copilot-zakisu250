// Create web server
// Run: node comments.js

// Load modules
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Load data from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));

// Set up routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/comments', function(req, res) {
	res.json(comments);
});