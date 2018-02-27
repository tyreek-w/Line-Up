//index manifest file for all profile routes
import express from "express";
const passport = require('../../Services/Passport/Passport');
const router = express.Router();

router.post("/new", require('./new_Hairtype'));
router.post("/:id/remove", require('./remove_Hairtype'));
router.get('/', require('./get_Hairtypes'));
router.get('/type', require('./get_Hairtypes_by_type'));

module.exports = router;