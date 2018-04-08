'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dbmain = require('../../config/DB/DBmain');

module.exports = {
    index: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var Hairtype, query;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            Hairtype = dbmain.model("Hairtype");
                            query = {};

                            if (req.query.position) {
                                query.position = req.query.position;
                            }
                            if (req.query.type) {
                                query.type = req.query.type;
                            }
                            if (req.query.length) {
                                query.length = req.query.length;
                            }
                            try {

                                Hairtype.findAll({
                                    where: query
                                }).then(function (hairtypes) {
                                    res.send(hairtypes);
                                });
                            } catch (err) {
                                res.status(500).send({
                                    error: 'An error has occurred trying to fetch songs' + err
                                });
                            }

                        case 6:
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
    }()
};
//# sourceMappingURL=HairtypeController.js.map