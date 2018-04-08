'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthMiddleware = require('../../Services/AuthMiddleware');

var _AuthMiddleware2 = _interopRequireDefault(_AuthMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passport = require('../../Services/Passport/Passport'); //index manifest file for all profile routes

var router = _express2.default.Router();

var haircutController = require('../../haircuts/Controllers/HaircutController');

router.post("/new", require('./new'));
router.post('/login', require('./login'));
router.get('/login', require('./login'));
router.get('/logout', _AuthMiddleware2.default, require('./logout'));
router.get('/', require('./get_user'));
router.get('/:userId', _AuthMiddleware2.default, require('./get_user'));
router.patch('/:userId', _AuthMiddleware2.default, require('./edit_user'));

//haircut routes
router.post('/:userId/haircuts/new', function (req, res) {
    haircutController.post(req, res);
});

router.get('/:userId/haircuts/', function (req, res) {
    haircutController.index(req, res);
});

module.exports = router;
//# sourceMappingURL=index.js.map