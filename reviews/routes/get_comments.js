"use strict";
import ReviewController from '../Controllers/ReviewController'

module.exports = function (req, res) {
    ReviewController.index(req, res);
};