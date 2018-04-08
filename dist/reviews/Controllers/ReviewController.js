'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dbmain = require('../../config/DB/DBmain');

module.exports = {
    index: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var query, Review;
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
                            if (!(req.params.barbershopId === undefined)) {
                                query.BarberShopId = req.params.barbershopId;
                            }
                            if (!(req.params.haircutId === undefined)) {
                                query.HaircutId = req.params.userId;
                            }
                            if (req.body.getComments) {
                                query.Comment = { $ne: null };
                            }
                            if (req.body.getLikes) {
                                query.Like = { $ne: null };
                            }
                            if (req.body.getRatings) {
                                query.Rating = { $ne: null };
                            }
                            Review = dbmain.model("Review");

                            try {
                                Review.findAll({
                                    where: query,
                                    limit: 20
                                }).then(function (reviews) {
                                    res.send(reviews);
                                });
                            } catch (err) {
                                res.status(500).send({
                                    error: 'An error has occurred trying to fetch songs' + err
                                });
                            }

                        case 10:
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
            var Haircut, Barber, Barbershop, Review, like;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            Haircut = dbmain.model("Haircut");
                            Barber = dbmain.model('Barber');
                            Barbershop = dbmain.model('BarberShop');
                            Review = dbmain.model("Review");


                            Review.belongsTo(Barbershop);
                            Review.belongsTo(Haircut);
                            Review.belongsTo(Barber);

                            like = null;

                            if (req.body.like) {
                                like = true;
                            }
                            try {
                                Review.create({
                                    id: req.body.id,
                                    price: req.body.price,
                                    duration: req.body.duration,
                                    HaircutId: parseInt(req.params.haircutId) || null,
                                    BarberId: parseInt(req.params.barberId) || null,
                                    BarberShopId: parseInt(req.params.barberId) || null,
                                    Like: like,
                                    Comment: req.body.comment || null,
                                    Rating: parseFloat(req.body.rating) || null
                                }).then(function (review) {
                                    res.send(review);
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
//# sourceMappingURL=ReviewController.js.map