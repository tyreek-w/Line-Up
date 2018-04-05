"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('../../Services/Passport/Passport'); //index manifest file for all profile routes

var router = _express2.default.Router();

router.post("/new", require('./new'));
router.post('/login', passport.authenticate('local-signin', { successRedirect: '/profiles', failureRedirect: '/profiles/login' }), require('./login'));
router.get('/login', require('./login'));
router.get('/logout', require('./authMiddleWare'), require('./logout'));
router.get('/', require('./get_user'));
router.get('/:userId', require('./authMiddleWare'), require('./get_user'));
router.patch('/:userId', require('./authMiddleWare'), require('./edit_user'));

module.exports = router;
//# sourceMappingURL=index.js.map