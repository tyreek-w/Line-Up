'use strict';
const dbmain = require('../../config/DB/DBmain');

exports.photo = function (request, response) {
    const Photo = dbmain.model("Photo");
    return Photo;
};