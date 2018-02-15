"use strict";

var express = require('express');
var volleyball = require('volleyball');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

var index = require('./profiles/index');

//import db
var db = require("./profiles/DBModels/index");

//test db connection, uncomment when changing database port
// db.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

var app = express();

app.use(volleyball);
app.use("/", index);

app.listen(config.server.port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Server has started on port 3000");
});

module.exports = app;
//# sourceMappingURL=index.js.map