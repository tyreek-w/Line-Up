"use strict";
const express = require('express');
const volleyball = require('volleyball');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const index = require('./profiles/index');

//import db
const db = require("./profiles/DBModels/index");

//test db connection, uncomment when changing database port
// db.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

const app = express();

app.use(volleyball);
app.use("/", index);


app.listen(config.server.port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Server has started on port 3000");
});

module.exports = app;
