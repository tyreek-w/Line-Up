"use strict";

import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

//route for all new User requests
router.post("/createUser", passport.authenticate('local-signup', {failureRedirect: '/signup'}), function (req, res) {
    res.redirect('/profiles');
});

router.get('/signup', function (req, res) {
    res.send('Please enter your credentials to sign up');
});

router.get('/signin', function (req, res) {
    res.send('Please enter valid credentials next time');
});

router.post('/login', passport.authenticate('local-signin', {failureRedirect: '/signin'}), function (req, res) {
    res.redirect('/');
});

router.get('/', function (req, res) {
    console.log(req.isAuthenticated());
    res.send('Welcome to development');

});

router.get('/logout', function (req, res) {
    req.logout();
    console.log(req.isAuthenticated());
    res.send('successfully logged out');
});

module.exports = router;
