"use strict";

var dbmain = require('../../config/DB/DBmain');

exports.barber = function (request, response) {
    var BarberShop = dbmain.model("Barber");
    return BarberShop;
};
//# sourceMappingURL=BarberShopController.js.map