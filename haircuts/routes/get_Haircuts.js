"use strict";
const hairControl = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res) {
    const Haircut = hairControl.haircut();
    if (req.params.id !== null) {
        Haircut.findById(req.params.id)
            .then((haircut) => {
                res.send(haircut.toJSON());
            });
    }
    else{
        Haircut.findAll()
    }
    res.send('List of Haircuts');
};