"use strict";
import ReviewController from '../Controllers/ReviewController'

//route used for retrieving a specific user
module.exports = function (req, res) {
    ReviewController.post(req, res);
};