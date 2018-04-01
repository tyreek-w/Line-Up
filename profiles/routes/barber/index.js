//index manifest file for all profile routes
import express from "express";
const passport = require('../../../Services/Passport/Passport');
const router = express.Router();

router.post('/:id/delete', require('./delete'));
router.post("/new", passport.authenticate('local-signup', {failureRedirect: '/signup'}), require('./new'));
router.post('/login', passport.authenticate('local-signin', {failureRedirect: '/signin'}, {successRedirect: '/'}), require('./login'));
router.get('/:id', require('./get_barber'));
router.get('/location', require('./get_barbers_by_location'));

module.exports = router;