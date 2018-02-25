//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

router.post("/new", require('./new_Haircut'));
router.post('/:id/remove', require('./delete_Haircut'));

router.get('/', require('./get_Haircuts'));
router.get('/:id', require('./get_Haircuts'));
router.get('/:hairtype', require('./get_Haircuts_by_hairtype'));

module.exports = router;
