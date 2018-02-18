'use strict';

/*
* PassPort service for registering both barbers and clients
*
* Provides different strategies for signing in and signing up users.
*
* Sequelize models are used to declare different search queries for authentication
*
* Models Used:
*   - Barber User
*   - Client User
*
* Strategies used:
* Local SignIn
*   - Used to verify users when signing in API with username/email and password
*   - Email is used instead of username to search for User in database if client is signing in
*   - Username is used to lookup user if barber is signing in
*
* Local SignUp
*   - Used to verify users when attempting to create a new account with username or email/password
*/

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../../DBModels/index');
var middleware = require('./AuthMiddleware');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    models.User.findById(id).then(function (user, err) {
        done(err, user);
    });
});

//Local signin strategy used for verfying and logging in existing users
passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, username, password, done) {
    var type = req.body.type || 'client';
    if (type === 'client') {
        //if type is client , proceeds to looking for a client User
        //looks for user with matching email
        var User = new models.User();
        models.User.findOne({ where: { email: username } }).then(function (user, err) {
            //respond with error if any are found
            if (err) {
                return done(err);
            }
            //if no user is found prompt user that email is incorrect
            if (!user) {
                console.log("User has incorrect email");
                return done(null, false, { message: 'Incorrect email' });
            }
            //if password validation fails prompt user that password is incorrect
            else if (!User.validatePassword(user, password)) {
                    console.log("User has incorrect password");
                    return done(null, false, { message: 'Incorrect password' });
                } else {
                    //if nothing fails, complete request and respond with user object
                    return done(null, user);
                }
        });
    } else if (type === 'barber' && req.userId) {
        //if type is barber and userid has been passed proceeds to looking for barber
        //looks for barber with matching username
        models.Barber.findOne({
            where: { username: req.username }
        }).then(function (user, err) {
            //respond with error if any are found
            if (err) return done(err);
            //if no barber matches prompt user that username is incorrect
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            //if nothing fails, complete request and respond with barber object
            return done(null, user);
        });
    }
}));

//Local Sign Up strategy used for verifying and creating new users
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, username, password, done) {

    if (req.body.type === 'client') {
        models.User.findOrCreate({ //look for existing user or create new
            where: { email: username },
            defaults: {
                id: req.body.id, //This id is generated somewhere else (only provided by req in dev)
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                status: req.body.status,
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender,
                paymentInfo: req.body.paymentInfo || null,
                passwordHash: password
            }
        }).spread(function (user, created) {
            if (created) {
                //if user is created return user in callback
                console.log('new user created');
                return done(null, user);
            } else {
                //if user is not created respond with error message
                console.log('User has already been created');
                return done(null, created, { message: 'User already exists' });
            }
        });
    } else if (req.body.UserId) {
        var BarberModel = models.Barber;
        BarberModel.findOrCreate({
            where: { username: req.body.username },
            defaults: {
                UserId: req.body.UserId,
                isPremium: req.body.premium || false
            }
        }).spread(function (user, created) {
            if (created) {
                console.log('barber Created');
                return done(null, user);
            } else {
                console.log("Barber already exists and could not be created");
                return done(null, false, { message: 'Barber Profile already exists' });
            }
        });
    }
}));

module.exports = passport;
//# sourceMappingURL=Passport.js.map