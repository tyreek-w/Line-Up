"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //index manifest file for all profile routes


router.post("/new", require('./new_Photo'));
router.post('/:id/remove', require('./delete_Photo'));

router.get('/', require('./get_Photos'));
router.get('/:id', require('./get_Photo'));

module.exports = router;
//# sourceMappingURL=index.js.map