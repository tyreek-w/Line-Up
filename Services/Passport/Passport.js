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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dbmain = require('../../config/DB/DBmain');
const Sequelize = require('sequelize');
const User = require('../../profiles/Controllers/UserController');

//serializes user id to session on each auth request after signin
passport.serializeUser((user, done) => {
    console.log('serialized');
    done(null, user.get().id);
});
//removes user with id from session
passport.deserializeUser((id, done) => {
    let tempUser = User.use();
    tempUser.findById(id)
        .then((user,err) => {
            done(err, user);
        });
});

//Local signin strategy used for verfying and logging in existing users
passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done) => {
        let type = req.body.type || 'client';
        if (type === 'client') { //if type is client , proceeds to looking for a client User
            //looks for client with matching email
            const tempUser = new User.use();
            tempUser.findOne({where: {email: username}})
                .then((user, err) => {
                    //respond with error if any are found
                    if (err) {return done(err);}
                    //if no user is found prompt user that email is incorrect
                    if (!user) {
                        console.log("User has incorrect email");
                        return done(null, false, {message: 'Incorrect email'})
                    }
                    //if password validation fails prompt user that password is incorrect
                    if (tempUser.validatePassword(user, password)) {
                        console.log("User has incorrect password");
                        return done(null, false, {message: 'Incorrect password'})
                    }
                    // if(tempUser.validatePassword(user, password)){
                    else{
                        //if nothing fails, complete request and respond with user object
                        console.log("login successful");
                        return done(null, user);
                    }
                })
            } else if (type === 'barber' && req.userId) { //if type is barber and userid has been passed proceeds to looking for barber
            //looks for barber with matching username
            models.Barber.findOne({
                where: {username: req.username}
            }).then((user, err) => {
                //respond with error if any are found
                if (err) return done(err);
                //if no barber matches prompt user that username is incorrect
                if (!user) {
                    return done(null, false, {message: 'Incorrect username'})
                }
                //if nothing fails, complete request and respond with barber object
                return done(null, user)
            });
        }})
    );

//Local Sign Up strategy used for verifying and creating new users
passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done) => {
    console.log('checking credentials');
        if(req.body.type === 'client' || req.body.type == null) {
            const tempUser = User.use();
            console.log('checking for user existence...');
            tempUser
                .findOrCreate({ //look for existing user or create new
                    where: { email: username},
                    defaults: {
                        id: req.body.id, //This id is generated somewhere else (only provided by req in dev)
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        status: req.body.status || 'active',
                        phoneNumber: req.body.phoneNumber,
                        gender: req.body.gender || 0,
                        paymentInfo: req.body.paymentInfo || null,
                        passwordHash: password,
                    }
                })
                .spread((user, created) => {
                    if(user) {  //if user is created return user in callback
                        console.log('new user created with id: ' + user.get().id);
                        req.session.user = user;
                        return done(null, user);
                    }
                    else{   //if user is not created respond with error message
                        console.log('User has already been created');
                        return done(null, created, {message: 'User already exists'})
                    }

                }).catch(Sequelize.ValidationError, function (err) {
                    console.log(err)
            });
        }
        else if(req.body.UserId) {
                let BarberModel = models.Barber;
                BarberModel
                    .findOrCreate({
                        where: { username: req.body.username},
                        defaults: {
                            UserId: req.body.UserId,
                            isPremium: req.body.premium || false
                        }
                    })
                    .spread((user, created) => {
                        if (created) {
                            console.log('barber Created');
                            return done(null, user)
                        }
                        else {
                            console.log("Barber already exists and could not be created");
                            return done(null, false, {message: 'Barber Profile already exists'})
                        }
                    }).catch(Sequelize.ValidationError, function (err) {
                    console.log(err)
                });
    }
})
);

module.exports = passport;