"use strict";

var hairControl = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res, next) {
    var Haircut = hairControl.haircut();
    Haircut.create({
        id: req.id,
        price: req.price,
        duration: req.duration
    }).then(function (haircut) {
        res.send('Haircut' + haircut.id + ' added!');
    }).catch(next);
    res.send('Haircut added');
};
//# sourceMappingURL=new_Haircut.js.map