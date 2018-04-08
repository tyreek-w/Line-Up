"use strict";

var _HairtypeController = require("../Controllers/HairtypeController");

var _HairtypeController2 = _interopRequireDefault(_HairtypeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//route used for retrieving a specific user
module.exports = function (req, res) {
    _HairtypeController2.default.index(req, res);
};
//# sourceMappingURL=get_Hairtypes.js.map