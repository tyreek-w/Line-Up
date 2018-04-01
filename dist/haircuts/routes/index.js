"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('../../Services/Passport/Passport'); //index manifest file for all haircut routes

var router = _express2.default.Router();

router.post("/new", require('./new_Haircut'));
router.post('/:id/remove', require('./delete_Haircut'));

router.get('/', require('./get_Haircuts'));
router.get('/:id', require('./get_Haircuts'));
router.get('/:hairtype', require('./get_Haircuts_by_hairtype'));

module.exports = router;
//# sourceMappingURL=index.js.map