'use strict';
const dbmain = require('../../config/DB/DBmain');
const bcrypt = require('bcrypt');


exports.use = function (req, res) {
    let User = dbmain.model("User");
    //validates user password
    User.validatePassword = function (user, testPass) {
        console.log("Validating password" + " : " + user.passwordHash + " and " + testPass);
        bcrypt.compare(testPass, user.passwordHash, (err, res) => {
            if (err) return (err);
            else{
                if(res) {
                    console.log("validate successfully");
                    return res;
                }
                else {
                    console.log("validate unsuccessful");
                    return res;
                }
            }
        });
    };
    return User;
};