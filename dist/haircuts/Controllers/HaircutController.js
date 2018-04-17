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
    postUserHaircut: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var Haircut, User, BarberHaircut, beard;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            Haircut = dbmain.model("Haircut");
                            User = dbmain.model("User");
                            BarberHaircut = dbmain.model('BarberHaircut');
                            beard = void 0;

                            if (req.body.beard === "no") {
                                beard = false;
                            }
                            if (req.body.beard === "yes") {
                                beard = true;
                            }
                            try {
                                Haircut.create({
                                    id: req.body.id,
                                    price: req.body.price,
                                    duration: req.body.duration,
                                    UserId: req.body.UserId,
                                    BarberHaircutId: req.body.BarberHaircutId,
                                    length: req.body.length,
                                    Beard: beard
                                }).then(function (haircut) {
                                    res.send(haircut);
                                });
                            } catch (err) {
                                console.log(err);
                                res.status(500).send({
                                    error: 'An error has occurred trying to create haircut' + err
                                });
                            }

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function postUserHaircut(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return postUserHaircut;
    }(),
    getLikes: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var BarberHaircutReview, Review;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            BarberHaircutReview = dbmain.model("BarberHaircutReview");
                            Review = dbmain.model("Review");


                            BarberHaircutReview.findById(req.body.BarberHaircutId).then(function (haircutReview) {
                                Review.findAll({
                                    where: {
                                        id: haircutReview.ReviewId,
                                        Like: true
                                    }
                                }).then(function (reviews) {
                                    res.status(200).send(reviews.length);
                                });
                            });

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function getLikes(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return getLikes;
    }(),
    getComments: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            var BarberHaircutReview, Review;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            BarberHaircutReview = dbmain.model("BarberHaircutReview");
                            Review = dbmain.model("Review");


                            BarberHaircutReview.findById(req.body.BarberHaircutId).then(function (haircutReview) {
                                Review.findAll({
                                    where: {
                                        id: haircutReview.ReviewId,
                                        Comment: {
                                            //look for all reviews where comment is not null
                                            $ne: null
                                        }
                                    }
                                }).then(function (reviews) {
                                    res.status(200).send(reviews);
                                });
                            });

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function getComments(_x7, _x8) {
            return _ref4.apply(this, arguments);
        }

        return getComments;
    }()
};
//# sourceMappingURL=HaircutController.js.map