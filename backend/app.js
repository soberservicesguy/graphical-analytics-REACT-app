const express = require('express');
const path = require('path');

// const bodyParser = require("body-parser"); // commented out since we using app.use(express.json()); // app.use(express.urlencoded({extended: true}));

/**
 * -------------- GENERAL SETUP ----------------
 */


// Create the Express application
var app = express();

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * -------------- INCLUDING REACT FRONTEND ----------------
 */
// LOAD FRONTEND FOR ALL REQUESTS OTHER THAN BACKEND ROUTER, IE FOR REACT-ROUTER-DOM
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


module.exports = app;