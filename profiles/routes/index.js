//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

router.post("/new", passport.authenticate('local-signup', {failureRedirect: '/profiles/login'}), require('./new'));
router.post('/login', passport.authenticate('local-signin', {successRedirect: '/profiles', failureRedirect: '/profiles/login'}), require('./login'));
router.get('/login', require('./login'));
router.get('/logout', require('./logout'));
router.get('/', require('./get_user'));


module.exports = router;
