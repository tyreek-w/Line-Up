//index manifest file for all review routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

router.post("/newPost/like", require('./post_Comment'));
router.post("/newPost/comment", require('./post_Like'));
router.post("/newPost/rating", require('./post_Rating'));

router.get('/ratings', require('./get_ratings'));
router.get('/comments', require('./get_comments'));
router.get('/likes', require('./get_likes'));
router.get('/likes/:id', require('./get_likes'));
router.get('/comments/:id', require('./get_comments'));
router.get('/ratings/:id', require('./get_comments'));
router.get('/', require('./get_Reviews'));


module.exports = router;
