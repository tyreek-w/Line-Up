"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //index manifest file for all review routes


router.post("/newlike", require('./post_Comment'));
router.post("/newComment", require('./post_Like'));
router.post("/newRating", require('./post_Rating'));

router.get('/ratings', require('./get_ratings'));
router.get('/comments', require('./get_comments'));
router.get('/likes', require('./get_likes'));
router.get('/likes/:reviewId', require('./get_likes'));
router.get('/comments/:reviewId', require('./get_comments'));
router.get('/ratings/:reviewId', require('./get_comments'));
router.get('/', require('./get_Reviews'));

module.exports = router;
//# sourceMappingURL=index.js.map