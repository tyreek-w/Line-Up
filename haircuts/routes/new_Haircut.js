"use strict";
const hairControl = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res, next) {
    const Haircut = hairControl.haircut();
    Haircut.create({
        id: req.id,
        price: req.price,
        duration: req.duration
    })
        .then((haircut) => {
            res.send('Haircut' + haircut.id + ' added!');
        })
        .catch(next);
    res.send('Haircut added');
};