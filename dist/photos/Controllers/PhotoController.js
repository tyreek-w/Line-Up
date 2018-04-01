'use strict';

var dbmain = require('../../config/DB/DBmain');

exports.photo = function (request, response) {
    var Photo = dbmain.model("Photo");
    return Photo;
};
//# sourceMappingURL=PhotoController.js.map