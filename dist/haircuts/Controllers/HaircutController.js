'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dbmain = require('../../config/DB/DBmain');

module.exports = {
    index: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var query, Haircut;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            query = {};

                            if (!(req.params.barberId === undefined)) {
                                query.BarberId = req.params.barberId;
                            }
                            if (!(req.params.userId === undefined)) {
                                query.UserId = req.params.userId;
                            }
                            Haircut = dbmain.model("Haircut");

                            try {
                                Haircut.findAll({
                                    where: query,
                                    limit: 20
                                }).then(function (haircuts) {
                                    res.send(haircuts);
                                });
                            } catch (err) {
                                res.status(500).send({
                                    error: 'An error has occurred trying to fetch songs' + err
                                });
                            }

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function index(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return index;
    }(),
    post: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var Haircut, User, Barber, Hairtype, haircutBarber;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            Haircut = dbmain.model("Haircut");
                            User = dbmain.model("User");
                            Barber = dbmain.model('Barber');
                            Hairtype = dbmain.model('Hairtype');

                            Haircut.belongsTo(Hairtype);
                            Haircut.belongsTo(User);
                            Haircut.belongsTo(Barber);
                            haircutBarber = null;

                            if (!(req.session.barber === undefined)) {
                                haircutBarber = req.session.barber.id;
                            }
                            try {
                                Haircut.create({
                                    id: req.body.id,
                                    price: req.body.price,
                                    duration: req.body.duration,
                                    UserId: req.session.user.id,
                                    BarberId: haircutBarber,
                                    ApprovedBy: null
                                }).then(function (haircut) {
                                    res.send(haircut);
                                });
                            } catch (err) {
                                res.status(500).send({
                                    error: 'An error has occurred trying to create haircut' + err
                                });
                            }

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function post(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return post;
    }()
};
//# sourceMappingURL=HaircutController.js.map