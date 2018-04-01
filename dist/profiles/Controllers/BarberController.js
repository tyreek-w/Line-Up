'use strict';

var dbmain = require('../../config/DB/DBmain');

exports.barber = function (request, response) {
    var Barber = dbmain.model("Barber");
    return Barber;
};
//# sourceMappingURL=BarberController.js.map