"use strict";

var hairController = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res) {
    hairController.index(req, res);
};
//# sourceMappingURL=get_Haircuts.js.map