'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var dbmain = require('../../config/DB/DBmain');
var Sequelize = require('sequelize');
var UserController = require('../../profiles/Controllers/UserController');

//serializes user id to session on each auth request after signin
passport.serializeUser(function (user, done) {
    console.log('serialized');
    done(null, user.get().id);
});
//removes user with id from session
passport.deserializeUser(function (id, done) {
    var User = dbmain.model("User");
    User.findById(id).then(function (user, err) {
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
        var _ref;

        //if type is client , proceeds to looking for a client User
        //looks for client with matching email
        var User = dbmain.model("User");
        var Hairtype = dbmain.model("Hairtype");
        var Photo = dbmain.model("Photo");
        var Location = dbmain.model("Location");
        User.findOne({ where: { email: username },
            include: [(_ref = {
                model: Hairtype
            }, _defineProperty(_ref, 'model', Photo), _defineProperty(_ref, 'model', Location), _defineProperty(_ref, 'as', 'UserPosition'), _ref)]
        }).then(function (user, err) {
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
            if (UserController.validatePassword(user, req)) {
                console.log("User has incorrect password");
                return done(null, false, { message: 'Incorrect password' });
            }
            // if(tempUser.validatePassword(user, password)){
            else {
                    //if nothing fails, complete request and respond with user object
                    console.log("login successful");
                    return done(null, user);
                }
        });
    } else if (type === 'barber' && req.userId) {
        //if type is barber and userid has been passed proceeds to looking for barber
        //looks for barber with matching username
        var Barber = model("Barber");
        Barber.findOne({
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
    console.log('checking credentials');
    if (req.body.type === 'client' || req.body.type == null) {
        var User = dbmain.model("User");
        console.log('checking for user existence...');
        User.findOrCreate({ //look for existing user or create new
            where: { email: username },
            defaults: {
                id: req.body.id, //This id is generated somewhere else (only provided by req in dev)
                status: req.body.status || 'active',
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender || 0,
                paymentInfo: req.body.paymentInfo || null,
                passwordHash: password
            }
        }).spread(function (user, created) {
            if (user) {
                //if user is created return user in callback
                console.log('new user created with id: ' + user.get().id);
                req.session.user = user;
                return done(null, user);
            } else {
                //if user is not created respond with error message
                console.log('User has already been created');
                return done(null, created, { message: 'User already exists' });
            }
        }).catch(Sequelize.ValidationError, function (err) {
            console.log(err);
        });
    } else if (req.session.user.id) {
        var BarberModel = dbmain.model("Barber");
        BarberModel.findOrCreate({
            where: { username: req.body.username },
            defaults: {
                UserId: req.session.user.id,
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
        }).catch(Sequelize.ValidationError, function (err) {
            console.log(err);
        });
    }
}));

module.exports = passport;
//# sourceMappingURL=Passport.js.map