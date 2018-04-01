"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //index manifest file for all profile routes


router.post("/new", require('./new_Hairstyle'));
router.post('/:id/remove', require('./delete_Hairstyle'));

router.get('/', require('./get_Hairstyles'));
router.get('/:id', require('./get_hairstyles'));

module.exports = router;
//# sourceMappingURL=index.js.map