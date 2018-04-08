'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dbmain = require('../../config/DB/DBmain');
var bcrypt = require('bcrypt');

module.exports = {
    validatePassword: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, req) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            try {
                                console.log("Validating password" + " : " + user.passwordHash + " and " + req.body.password);
                                bcrypt.compare(req.body.password, user.passwordHash, function (err, res) {
                                    if (err) throw err;
                                    if (res) {
                                        console.log("validate successfully");
                                        return res;
                                    } else {
                                        console.log("validate unsuccessful " + res);
                                        return res;
                                    }
                                });
                            } catch (err) {
                                res.status(500).send({
                                    error: 'An error has occurred trying to validate password: \n' + err
                                });
                            }

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function validatePassword(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return validatePassword;
    }()
};
//# sourceMappingURL=UserController.js.map