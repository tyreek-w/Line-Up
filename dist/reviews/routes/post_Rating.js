"use strict";

var _ReviewController = require("../Controllers/ReviewController");

var _ReviewController2 = _interopRequireDefault(_ReviewController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//route used for retrieving a specific user
module.exports = function (req, res) {
    _ReviewController2.default.post(req, res);
};
//# sourceMappingURL=post_Rating.js.map