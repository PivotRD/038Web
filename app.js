const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('express');
require("process");
require("http");

const bodyParser = require("body-parser");

//initialize express.
const app = express();

// Initialize variables. 
const port = 3000; // process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev'));
app.use(express.static('Build'));
app.use(bodyParser.json());

// Set up a route for index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + 'Game/index.html'));
});

// Start the server.
app.listen(port);
console.log('Listening on http://localhost:' + port)