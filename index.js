"use strict";
const express = require('express');
const volleyball = require('volleyball');


const index = require('./profiles/index');
var app = express();

app.use(volleyball);
app.use('/', index);





app.listen(3000, function(err) {
  if(err){
    console.log(err);
  }
  console.log('Server has started on port 3000');
});

module.exports = app;
