"use strict";

var express = require('express');
var volleyball = require('volleyball');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config_env')[env];
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var RedisStore = require('connect-redis')(session);

var profiles = require('./profiles/routes/index');

// //import db
// const db = require("./config/config_db");
//init app to express
var app = express();

//Express MiddleWare
app.use(express.static('public'));
app.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    secret: config.redisStore.secret,
    resave: false,
    saveUninitialized: false
}));
app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//sets routes to appropriate names
app.use("/profiles", profiles);

//starts server and assigns it to a port
app.listen(config.server.port, function (err) {
    if (err) {
        console.log('There was a problem starting the server' + err);
    }
    console.log("Server has started on port 3000");
});

module.exports = app;
//# sourceMappingURL=index.js.map