//index manifest file for all profile routes
import express from "express";
const router = express.Router();
import authMiddleWare from '../../Services/AuthMiddleware'

router.get('/', require('./get_barbershops'));
router.get('/:barbershopId', authMiddleWare, require('./get_barbershop'));
router.patch('/:barberId', authMiddleWare, require('./edit_barbershop'));


module.exports = router;