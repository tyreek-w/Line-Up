"use strict";
//route used for retrieving a specific user

module.exports = function (req, res) {
    var hairtypeControl = require('../../hairtypes/Controllers/HairtypeController');
    var Hairtype = hairtypeControl.hairtype();
    Hairtype.getHaircuts();
    res.send('List of haircuts based on price given');
};
//# sourceMappingURL=get_Haircuts_by_hairtype.js.map