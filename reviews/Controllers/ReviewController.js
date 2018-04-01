const dbmain = require('../../config/DB/DBmain');

exports.review = function(request, response) {
    const Review = dbmain.model("Review");
    return Review;
};