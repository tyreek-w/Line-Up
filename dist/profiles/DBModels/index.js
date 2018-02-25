"use strict";

// const fs = require("fs"); // file system for grabbing files
var path = require("path");
// const Sequelize = require('sequelize');
// const db = require('../../config/DB/config_db');
//
// // Load each model file
// const models = Object.assign({}, ...fs.readdirSync(__dirname)
//     .filter((file) =>
//         (file.indexOf(".") !== 0) && (file !== 'index.js')
//     )
//     .map(function (file) {
//         const model = require(path.join(__dirname, file));
//         // console.log(model.init(sequelize).tableName)
//         return {
//             [model.name]: model.init(db),
//         };
//     })
// );
//
// // // Load model associations
// // for (const model of Object.keys(models)) {
// //     typeof models[model].associate === 'function' && models[model].associate(models);
// // }
//
// const bcrypt = require('bcrypt');
// const saltRounds = 4;
//
// //User Hooks
//
// //using the user model encrypt and salt password before create
// models.User.beforeCreate ((user, options) => {
//     console.log("Storing the password");
//     return new Promise((resolve, reject) => {
//         bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt using saltRounds provided
//             if(err) return reject(err);
//             bcrypt.hash(user.passwordHash, salt, (err, hash) => { //generate hash using password and salt generated
//                 console.log("Getting password encrypted");
//                 user.passwordHash = hash; //sets user password to hash
//                 return resolve(user, options);
//             });
//         });
//     });
// });
//
// //instance Methods
// models.User.prototype.validatePassword = ((user, testPass) => {
//
//     console.log("Validating password" + " : " + user.passwordHash + " and " + testPass);
//     bcrypt.compare(testPass, user.passwordHash, (err, res) => {
//         if (err) return (err);
//         else{
//             if(res) {
//                 console.log("validate successfully");
//                 return res;
//             }
//             else {
//                 console.log("validate unsuccessful");
//                 return res;
//             }
//         }
//     });
// });
//
// module.exports = models;
//

var dbmain = require('../../config/DB/DBmain');

dbmain.setup(__dirname);
//# sourceMappingURL=index.js.map