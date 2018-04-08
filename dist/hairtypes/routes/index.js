'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //index manifest file for all hairtype routes


router.get('/', require('./get_Hairtypes'));

module.exports = router;
//# sourceMappingURL=index.js.map