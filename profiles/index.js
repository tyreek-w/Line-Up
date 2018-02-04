"use strict";
const express = require('express');
const router = express.Router();

const User = require('./user');
const Barber = require('./barber');

let joe = new User.User({
  firstName: 'joe',
  lastName: 'ivb',
  birthdate: 'birthday',
  email: 'email',
  phoneNumber: 'phonenumber',
  city: 'city',
  state: 'state',
  country: 'country'
}, true);

joe.update('firstName', 'Emen');

let joeBarber = new Barber(
  joe, {
    username: 'snazzyMan'
  }
);

router.get('/', function(req, res) {
  let words = req.name;
  res.send(words);
});

module.exports = router;
