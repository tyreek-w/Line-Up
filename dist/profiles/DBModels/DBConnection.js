"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fs = require("fs"); // file system for grabbing files
var path = require("path"); // better than '\/..\/' for portability
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env];

var db = new Sequelize(config.database.db_name, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.port,
    //limits Operator Alias use for security reasons
    operatorsAliases: false
});
module.exports = db;

// Load each model file
var models = Object.assign.apply(Object, [{}].concat(_toConsumableArray(fs.readdirSync('./profiles/DBModels').filter(function (file) {
    return file.indexOf(".") !== 0;
}).map(function (file) {
    var model = require(path.join(__dirname, file));
    // console.log(model.init(sequelize).tableName)
    return _defineProperty({}, model.name, model.init(db));
}))));

// Load model associations
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = Object.keys(models)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var model = _step.value;

        typeof models[model].associate === 'function' && models[model].associate(models);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

module.exports = models;
//# sourceMappingURL=index.js.map