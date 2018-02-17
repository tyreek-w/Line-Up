"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userAC = require('../userActionController');
var passport = require('../Services/Passport');
var router = _express2.default.Router();

//route for all new User requests
router.post("/createUser", passport.authenticate('local-signup', { failureRedirect: '/signup' }), function (req, res) {
    res.redirect('/');
});

router.get('/signup', function (req, res) {
    res.send('Please enter your credentials to sign up');
});

router.get('/signin', function (req, res) {
    res.send('Please enter valid credentials next time');
});

router.post('/login', passport.authenticate('local-signin', { failureRedirect: '/signin' }), function (req, res) {
    res.redirect('/');
});

router.get('/', function (req, res) {
    res.send('Welcome to development');
});

module.exports = router;
//# sourceMappingURL=index.js.map