"use strict";
//declaration entity file for user model

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _profileTypes = require("./profileTypes");

var _profileTypes2 = _interopRequireDefault(_profileTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var active = true;

//validates info before user can be created
var verifyInfo = function verifyInfo(obj) {

    if (typeof obj.firstName !== "String") {
        //throw not correct type error
        return false;
    } else if (typeof obj.lastName !== "String") {
        //throw not correct type error
        return false;
    } else if (typeof obj.birthdate !== "String") {
        //throw incorrect birthDate error
        return false;
    } else if (typeof obj.email !== "String") {
        //throw incorrect email error
        return false;
    } else if (typeof obj.phoneNumber !== "String") {
        //throw incorrect phone format error
        return false;
    } else if ((_typeof(obj.city) && _typeof(obj.state)) !== "String") {
        //throw invalid location format error
        return false;
    } else if (typeof obj.country !== "String") {
        //throw invalid country format error
        return false;
    } else if (typeof obj.gender !== "String") {
        //incorrect format
        return false;
    } else {
        return true;
    }
};

//generates id for database storage
var canActivate = function canActivate(info) {
    return {
        activate: function activate(verified) {
            if (verified) {
                info.status = active;
            } else {
                //Error: User is not a verified user
            }
        }
    };
};

var canGenerateId = function canGenerateId() {
    return {
        generateId: function generateId(x) {

            var someId = x;

            //checks to see if there is an existing id
            if (this.id) {
                console.log("There is already an existing id");
                return;
            }
            console.log("attempting to add id...");
            //adds new id property to user object
            Object.defineProperty(this, "id", {
                value: someId
            });
        }
    };
};

//gives user ability to check if payment is setup
var checkPaymentInfo = function checkPaymentInfo(state) {
    return {

        hasPaymentMethod: function hasPaymentMethod() {
            //check if paymentInfo is empty
            if (state.paymentInfo != null) {
                return true;
            } else {
                return false;
            }
        }
    };
};

//Public variables and objects

function User(info, verified) {

    if (verified) {
        //checks to see if this is an existing user
        if (info.dateCreated) {
            if (info.status == active) {
                return Object.assign(info, canUpdate(info), checkPaymentInfo(info));
            } else {
                //give option to activate profile
                return Object.assign(info, canActivate(info));
            }
        } else {
            if (verifyInfo(obj)) {
                console.log(error);
            } else {
                //creates a new user profile
                var state = {

                    type: _profileTypes2.default[0],
                    status: active,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    birthdate: info.birthdate,
                    email: info.email,
                    phoneNumber: info.phoneNumber,
                    city: info.city,
                    state: info.state,
                    country: info.country,
                    gender: info.gender,
                    paymentInfo: null,
                    dateCreated: new Date()

                };

                Object.defineProperty(state, "hasBarberProfile", {
                    value: false,
                    enumerable: true,
                    writable: true
                });

                return Object.assign(state, canUpdate(), canGenerateId(), checkPaymentInfo());
            }
        }
    } else {
        //Error: User has not been verified
    }
}

//gives user ability to update personal info
var canUpdate = function canUpdate() {
    return {

        //enter key value object of info to update
        update: function update(key, value) {

            if (this.hasOwnProperty(key)) {
                Object.defineProperty(this, key, {
                    value: value,
                    writable: true,
                    configurable: true,
                    enumerable: true
                });
            } else {
                console.log("Could not find a matching key value pair");
                //Error: this property does not exist
            }
        }
    };
};

exports.default = { User: User, canUpdate: canUpdate };
//# sourceMappingURL=user.js.map