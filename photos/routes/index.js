//index manifest file for all profile routes
import express from "express";
const router = express.Router();

router.post("/new", require('./new_Photo'));
router.post('/:id/remove', require('./delete_Photo'));

router.get('/', require('./get_Photos'));
router.get('/:id', require('./get_Photo'));

module.exports = router;