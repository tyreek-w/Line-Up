'use strict';
const dbmain = require('../../config/DB/DBmain');
const bcrypt = require('bcrypt');


module.exports = {
    async validatePassword (user, req) {
        try {
            console.log("Validating password" + " : " + user.passwordHash + " and " + req.body.password);
            bcrypt.compare(req.body.password, user.passwordHash, (err, res) => {
                if(err) throw(err);
                if(res) {
                        console.log("validate successfully");
                        return res;
                }
                else {
                    console.log("validate unsuccessful " + res);
                    return res;
                }
            })
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to validate password: \n' + err
            })
        }
    }
};