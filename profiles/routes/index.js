//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

router.post("/new", passport.authenticate('local-signup', {failureRedirect: '/signup'}), require('./new'));
router.post('/login', passport.authenticate('local-signin', {failureRedirect: '/signin'}, {successRedirect: '/'}), require('./login'));
router.get('/login', require('./login'));
router.get('/logout', require('./logout'));
router.get('/:id', require('./get_user'));


module.exports = router;
