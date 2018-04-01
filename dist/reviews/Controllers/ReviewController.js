"use strict";

var dbmain = require('../../config/DB/DBmain');

exports.review = function (request, response) {
    var Review = dbmain.model("Review");
    return Review;
};
//# sourceMappingURL=ReviewController.js.map