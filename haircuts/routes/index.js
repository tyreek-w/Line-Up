//index manifest file for all haircut routes
import express from "express";
const router = express.Router();
import authMiddleWare from '../../Services/AuthMiddleware'

router.post("/new", require('./new_Haircut'));
router.post('/:id/remove', require('./delete_Haircut'));

router.get('/', require('./get_Haircuts'));
router.get('/:id', require('./get_Haircuts'));
router.get('/:hairtype', require('./get_Haircuts_by_hairtype'));

module.exports = router;
