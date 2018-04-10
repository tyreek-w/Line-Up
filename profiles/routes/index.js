//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();
import authMiddleWare from '../../Services/AuthMiddleware'
const haircutController = require('../../haircuts/Controllers/HaircutController');

router.post("/new", require('./new'));
router.post('/login', require('./login'));
router.get('/login', require('./login'));
router.get('/logout', authMiddleWare, require('./logout'));
router.get('/', require('./get_user'));
router.get('/:userId', authMiddleWare, require('./get_user'));
router.patch('/:userId', authMiddleWare, require('./edit_user'));

router.get('/:userId/haircuts/', function (req, res) {
    haircutController.index(req, res);
});

module.exports = router;
