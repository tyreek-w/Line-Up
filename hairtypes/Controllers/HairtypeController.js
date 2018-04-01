'use strict';
const dbmain = require('../../config/DB/DBmain');

exports.hairtype = function(request, response) {
    const Hairtype = dbmain.model("Hairtype");
    return Hairtype;
};