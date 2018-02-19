"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('../../../Services/Passport/Passport'); //index manifest file for all profile routes

var router = _express2.default.Router();

router.post("/new", passport.authenticate('local-signup', { failureRedirect: '/signup' }), require('./new'));
router.post('/login', passport.authenticate('local-signin', { failureRedirect: '/signin' }, { successRedirect: '/' }), require('./login'));
router.get('/:id', require('./get_barber'));

module.exports = router;
//# sourceMappingURL=index.js.map