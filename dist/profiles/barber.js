"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profileTypes = require("./profileTypes");

var _profileTypes2 = _interopRequireDefault(_profileTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//declaration entity file for barber model


//Public Functions

//creates barber profile from user
function Barber(userId, profileObj) {

    //assign user provided values to new barber profile
    var profile = {
        type: _profileTypes2.default.profileType[1],
        userId: userId,
        username: profileObj.username,
        premium: profileObj.premium || false
    };
    //creates a new barber profile object
    return Object.assign({}, profile);
}

exports.default = Barber;
//# sourceMappingURL=barber.js.map