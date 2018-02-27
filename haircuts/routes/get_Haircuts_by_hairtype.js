"use strict";
//route used for retrieving a specific user
module.exports = function (req, res) {
    const hairControl = require('../Controllers/HaircutController');
    const Haircut = hairControl.haircut();

    Haircut.findAll(where: {})
    res.send('List of haircuts based on price given');
};