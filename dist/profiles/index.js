"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userAC = require('./userActionController');
var User = require('./user.js');
var router = _express2.default.Router();

//route for all new User requests
router.post("/createUser", function (req, res) {

    var userInfo = req.body; //assigns user info to an object
    var tempUser = new User(userInfo); //creates a new User object with info

    userAC.createProfile(tempUser, function (response) {
        //attempts to create user and receives a success or error
        res.json(response);
    });
});

module.exports = router;
//# sourceMappingURL=index.js.map