//index manifest file for all review routes
import express from "express";
const router = express.Router();

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
