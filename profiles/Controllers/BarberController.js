'use strict';
const dbmain = require('../../config/DB/DBmain');

exports.barber = function(request, response) {
    const Barber = dbmain.model("Barber");
    return Barber;
};