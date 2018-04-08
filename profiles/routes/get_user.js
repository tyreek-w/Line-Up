"use strict";
//route used for retrieving a specific user
module.exports = function (req, res) {
    res.send('Welcome to your account ' + req.session.user.id);
};