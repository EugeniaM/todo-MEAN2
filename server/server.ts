import express = require('express');
import path = require('path');
var bodyParser = require('body-parser');
var port: number = process.env.PORT || 3000;

var app = express();

var mongoose = require('mongoose');
var passport = require('passport');
mongoose.connect('mongodb://heroku_77q6gvb7:jep2th2uruap3ghqf84l7mcjg8@ds135798.mlab.com:35798/heroku_77q6gvb7' || 'mongodb://localhost:27017/todos2');
require('./models/project.model.js');
require('./models/task.model.js');
require('./models/user.model.js');
require('./config/passport')(passport);


var appRoutes = require('./routes/app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));
app.use(passport.initialize());

app.use('/', appRoutes);

var db = mongoose.connection;
//mongoose.Promise = global.Promise;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
});