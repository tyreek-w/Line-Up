"use strict";

var hairControl = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res) {
    var Haircut = hairControl.haircut();
    if (req.params.id !== null) {
        Haircut.findById(req.params.id).then(function (haircut) {
            res.send(haircut.toJSON());
        });
    } else {
        Haircut.findAll();
    }
    res.send('List of Haircuts');
};
//# sourceMappingURL=get_Haircuts.js.map