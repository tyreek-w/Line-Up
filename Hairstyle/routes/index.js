//index manifest file for all profile routes
import express from "express";
const router = express.Router();

router.post("/new", require('./new_Hairstyle'));
router.post('/:id/remove', require('./delete_Hairstyle'));

router.get('/', require('./get_Hairstyles'));
router.get('/:id', require('./get_hairstyles'));

module.exports = router;