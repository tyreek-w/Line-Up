//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();
import authMiddleWare from '../../Services/AuthMiddleware'
const haircutController = require('../../haircuts/Controllers/HaircutController');

router.post('/login', require('./login'));
router.get('/login', require('./login'));
router.get('/', require('./get_barbers'));
router.get('/:barberId', authMiddleWare, require('./get_barber'));
router.patch('/:barberId', authMiddleWare, require('./edit_barber'));

//haircut routes
router.post('/:barberId/haircuts/new', function (req, res) {
    haircutController.post(req, res);
});

router.get('/:barberId/haircuts/', function (req, res) {
    haircutController.index(req, res);
});

module.exports = router;