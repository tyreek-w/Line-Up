"use strict";

var models = require('./DBModels/index');

function createProfile(Object, response) {
    var err = "";
    if (Object.type === 'client') {
        var UserModel = models.User;
        UserModel.findOrCreate({ //look for existing user or create new
            where: {
                id: Object.id,
                firstName: Object.firstName,
                lastName: Object.lastName,
                status: Object.status,
                email: Object.email,
                phoneNumber: Object.phoneNumber,
                gender: Object.gender,
                paymentInfo: Object.paymentInfo,
                passwordHash: Object.password
            }
        }).spread(function (user, created) {
            if (created) {
                //if user is created return user in callback
                console.log('user created');
                response(user);
            } else {
                //if user is not created respond with error message
                console.log(created);
                response(err);
            }
        });
    } else if (Object.type === 'barber' && Object.userId) {
        var BarberModel = models.Barber;
        BarberModel.findOrCreate({
            where: {
                userId: Object.userId,
                username: profileObj.username,
                premium: Object.premium

            }
        }).spread(function (user, created) {
            if (created) {
                console.log('barber Created');
                response(user);
            } else {
                console.log("Barber already exists and could not be created");
                response(err('Barber already exists'));
            }
        });
    }
}

module.exports = { createProfile: createProfile };
//# sourceMappingURL=userActionController.js.map