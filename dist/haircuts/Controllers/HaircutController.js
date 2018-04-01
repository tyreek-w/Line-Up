'use strict';

var dbmain = require('../../config/DB/DBmain');

exports.haircut = function (request, response) {
    var Haircut = dbmain.model("Haircut");
    return Haircut;
};
//# sourceMappingURL=HaircutController.js.map