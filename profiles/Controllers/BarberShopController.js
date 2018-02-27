const dbmain = require('../../config/DB/DBmain');

exports.barber = function(request, response) {
    const BarberShop = dbmain.model("Barber");
    return BarberShop;
};