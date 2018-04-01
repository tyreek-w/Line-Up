'use strict';

var dbmain = require('../../config/DB/DBmain');

exports.hairtype = function (request, response) {
    var Hairtype = dbmain.model("Hairtype");
    return Hairtype;
};
//# sourceMappingURL=HairtypeController.js.map