"use strict";
const passport = require('../../Services/Passport/Passport');
const Joi = require('joi');
//route used for creating a new user
module.exports = function (req, res, next) {
    const schema = Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().regex(
            //password must contain letters or numbers
            //and be a minumum of 6 characters, maximum 30
            new RegExp('^[a-zA-Z0-9]{6,30}$')
        ),
        birthdate: Joi.string(),
        username: Joi.string().token(),
        type: Joi.string(),
        id: Joi.number()
    });
    const {error, value} = Joi.validate(req.body, schema);
    if (error) {
        switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'please provide valid email address'
                });
                break;
            case 'password':
                res.status(400).send({
                    error: 'please provide a valid password'
                });
                break;
            default:
                res.status(400).end();
        }
    } else {
        passport.authenticate('local-signup', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                res.status(401).send({
                    error: info.message
                });
            } else {
                console.log(req.baseUrl);
                res.status(200).redirect('/profiles');
            }
        })(req, res, next);
    }
};