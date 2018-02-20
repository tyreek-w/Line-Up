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
    // console.log(model.init(sequelize).tableName)
    return _defineProperty({}, model.name, model.init(db));
}))));

// // Load model associations
// for (const model of Object.keys(models)) {
//     typeof models[model].associate === 'function' && models[model].associate(models);
// }

var bcrypt = require('bcrypt');
var saltRounds = 4;

//User Hooks

//using the user model encrypt and salt password before create
models.User.beforeCreate(function (user, options) {
    console.log("Storing the password");
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            //generate salt using saltRounds provided
            if (err) return reject(err);
            bcrypt.hash(user.passwordHash, salt, function (err, hash) {
                //generate hash using password and salt generated
                console.log("Getting password encrypted");
                user.passwordHash = hash; //sets user password to hash
                return resolve(user, options);
            });
        });
    });
});

//instance Methods
models.User.prototype.validatePassword = function (user, testPass) {

    console.log("Validating password" + " : " + user.passwordHash + " and " + testPass);
    bcrypt.compare(testPass, user.passwordHash, function (err, res) {
        if (err) return err;else {
            if (res) {
                console.log("validate successfully");
                return res;
            } else {
                console.log("validate unsuccessful");
                return res;
            }
        }
    });
};

module.exports = models;
//# sourceMappingURL=index.js.map