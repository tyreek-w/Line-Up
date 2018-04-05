"use strict";
const express = require('express');
const volleyball = require('volleyball');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config_env')[env];
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const RedisStore = require('connect-redis')(session);

const profiles = require('./profiles/routes/index');
const barber_profiles = require('./profiles/routes/barber/index');
const reviews = require('./reviews/routes/index');
const haircuts = require('./haircuts/routes/index');
const Hairstyle = require('./Hairstyle/routes/index');
const photos = require('./photos/routes/index');

// //import db
const dbmain = require("./config/DB/DBmain");
dbmain.setup(__dirname + '/DBModels');
//init app to express
const app = express();

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
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

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
