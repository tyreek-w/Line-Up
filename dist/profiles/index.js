"use strict";

var _user = require("./user");

var _user2 = _interopRequireDefault(_user);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _barber = require("./barber");

var _barber2 = _interopRequireDefault(_barber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var joe = new _user2.default.User({
    firstName: 'joe',
    lastName: 'ivb',
    birthdate: 'birthday',
    email: "email",
    phoneNumber: 'phonenumber',
    city: "city",
    state: 'state',
    country: "country"
}, true);

joe.update("firstName", "Emen");

var joeBarber = {};
joeBarber = new _barber2.default(joe, {
    username: "snazzyMan"
});

router.get("/", function (req, res) {
    res.json(joeBarber);
});

module.exports = router;
//# sourceMappingURL=index.js.map