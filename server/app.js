// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data');

const PORT = process.env.PORT || 3000;

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send('New Express server');
})

app.get('/data', function(req, res){
    res.status(200).send(data);
})

app.get('*', function(req, res){
    res.status(404).send('No Page Found');
})

// finally export the express application
module.exports = app;
