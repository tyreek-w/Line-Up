"use strict";

var passport = require('../../Services/Passport/Passport');
//route used for creating a new user
module.exports = function (req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
        console.log(req.body);
        if (err) {
            return next(err);
        }
        if (!user) {
            res.status(401).send(info.message);
        } else {
            res.status(200).send('successful');
        }
    })(req, res, next);
};
//# sourceMappingURL=new.js.map