'use strict';

module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/profiles/login');
};
//# sourceMappingURL=AuthMiddleware.js.map