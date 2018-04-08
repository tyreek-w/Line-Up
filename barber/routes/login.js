"use strict";
//route used for retrieving a specific user
module.exports = function (req, res) {
    res.redirect('Welcome to your account ' + req.username);
};