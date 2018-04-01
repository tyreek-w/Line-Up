'use strict';
const dbmain = require('../../config/DB/DBmain');

exports.haircut = function (request, response) {
    const Haircut = dbmain.model("Haircut");
    return Haircut;
};