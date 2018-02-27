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
var barber_profiles = require('./profiles/routes/barber/index');
var reviews = require('./reviews/routes/index');
var haircuts = require('./haircuts/routes/index');
var Hairstyle = require('./Hairstyle/routes/index');
var photos = require('./photos/routes/index');

// //import db
var dbmain = require("./config/DB/DBmain");
dbmain.setup(__dirname + '/DBModels');
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
app.use('/profiles/barbers', barber_profiles);
app.use('/reviews', reviews);
app.use('/haircuts', haircuts);
app.use('/hairstyles', Hairstyle);
app.use('/photos', photos);

//starts server and assigns it to a port
app.listen(config.server.port, function (err) {
    if (err) {
        console.log('There was a problem starting the server' + err);
    }
    console.log("Server has started on port 3000");
});

module.exports = app;
//# sourceMappingURL=index.js.map