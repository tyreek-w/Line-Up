"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('../../Services/Passport/Passport'); //index manifest file for all profile routes

var router = _express2.default.Router();

router.post("/new", require('./new_Hairtype'));
router.post("/:id/remove", require('./remove_Hairtype'));
router.get('/', require('./get_Hairtypes'));
router.get('/type', require('./get_Hairtypes_by_type'));

module.exports = router;
//# sourceMappingURL=index.js.map