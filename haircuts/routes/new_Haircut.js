"use strict";
const hairController = require('../Controllers/HaircutController');
//route used for retrieving a specific user
module.exports = function (req, res) {
    hairController.post(req, res);
};