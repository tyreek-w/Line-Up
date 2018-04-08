//index manifest file for all hairtype routes
import express from "express";
const router = express.Router();

router.get('/', require('./get_Hairtypes'));

module.exports = router;