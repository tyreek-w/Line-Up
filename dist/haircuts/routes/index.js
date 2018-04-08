"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _AuthMiddleware = require("../../Services/AuthMiddleware");

var _AuthMiddleware2 = _interopRequireDefault(_AuthMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //index manifest file for all haircut routes


router.post("/new", require('./new_Haircut'));
router.post('/:id/remove', require('./delete_Haircut'));

router.get('/', require('./get_Haircuts'));
router.get('/:id', require('./get_Haircuts'));
router.get('/:hairtype', require('./get_Haircuts_by_hairtype'));

module.exports = router;
//# sourceMappingURL=index.js.map