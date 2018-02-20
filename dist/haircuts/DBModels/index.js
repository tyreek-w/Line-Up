"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fs = require("fs"); // file system for grabbing files
var path = require("path");
var Sequelize = require('sequelize');
var db = require('../../config/DB/config_db');

// Load each model file
var models = Object.assign.apply(Object, [{}].concat(_toConsumableArray(fs.readdirSync(__dirname).filter(function (file) {
    return file.indexOf(".") !== 0 && file !== 'index.js';
}).map(function (file) {
    var model = require(path.join(__dirname, file));
    // console.log(model.init(db).tableName);
    return _defineProperty({}, model.name, model.init(db));
}))));

module.exports = models;
//# sourceMappingURL=index.js.map