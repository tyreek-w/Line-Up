"use strict";
import HairtypeController from '../Controllers/HairtypeController'
//route used for retrieving a specific user
module.exports = function (req, res) {
    HairtypeController.index(req, res);
};