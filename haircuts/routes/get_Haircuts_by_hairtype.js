"use strict";
//route used for retrieving a specific user
module.exports = function (req, res) {
    const hairtypeControl = require('../../hairtypes/Controllers/HairtypeController');
    const Hairtype = hairtypeControl.hairtype();
    Hairtype.getHaircuts();
    res.send('List of haircuts based on price given');
};