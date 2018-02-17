"use strict";
const express = require('express');
const volleyball = require('volleyball');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const profiles = require('./profiles/routes/index');

//import db
const db = require("./profiles/DBModels/index");
//init app to express
const app = express();

//Express MiddleWare
app.use(express.static('public'));
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false
}));
app.use(volleyball);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//sets routes to appropriate names
app.use("/", profiles);

//starts server and assigns it to a port
app.listen(config.server.port, function (err) {
    if (err) {
        console.log('There was a problem starting the server' + err);
    }
    console.log("Server has started on port 3000");
});

module.exports = app;
