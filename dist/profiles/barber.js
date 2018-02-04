"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profileTypes = require("./profileTypes");

var _profileTypes2 = _interopRequireDefault(_profileTypes);

var _user = require("./user");

var _user2 = _interopRequireDefault(_user);

var _barberMemberInfo = require("./barberMemberInfo");

var _barberMemberInfo2 = _interopRequireDefault(_barberMemberInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//declaration entity file for barber model

var monthlyAmount = 0;
var annualAmount = 0;

var canChooseBarbershop = function canChooseBarbershop() {
    return {};
};

var canUpdateMetrics = function canUpdateMetrics() {
    return {
        updateWaitTime: function updateWaitTime(reviews) {

            var avgWaitTime = 0;
            var waitTimeEntered = 0;

            Object.keys(reviews).forEach(function (review) {
                if (review.waitTime === null) {
                    return;
                }
                avgWaitTime += review.waitTime;
                waitTimeEntered++;
            });
            avgWaitTime /= waitTimeEntered;

            Object.defineProperty(this, avgWait, {
                value: avgWaitTime,
                enumerable: true,
                writable: true
            });
        },
        updateAverageDuration: function updateAverageDuration(haircuts) {
            var avgDuration = 0;

            /*add duration of each haircut together*/
            Object.keys(haircuts).forEach(function (haircut) {
                avgDuration += haircut.duration;
            });
            //get average of all haircut durations and update barber profile
            avgDuration /= haircuts.length;
            this.avgCutDuration = avgDuration;
        }
    };
};

var canConfigureMembership = function canConfigureMembership() {
    return {

        //barber can check if they are up to date on there payments
        isPremium: function isPremium() {
            if (this.paymentInfo.status == 'current') {
                Object.defineProperty(barber, 'premium', {
                    value: true,
                    writable: true,
                    enumerable: true
                });
            }
        },


        //barber can check what subscription they currently have
        checkTerm: function checkTerm() {

            if (this.paymentInfo.pastAmount == monthlyAmount) {
                Object.defineProperty(this.paymentInfo, 'arrangement', {
                    value: 'monthly',
                    writable: true,
                    enumerable: true
                });
            } else if (this.paymentInfo.pastAmount == yearlyAmount) {
                Object.defineProperty(this.paymentInfo, 'arrangement', {
                    value: 'yearly',
                    writable: true,
                    enumerable: true
                });
            }
        }
    };
};

//Public Functions

//creates barber profile from user
function Barber(user, profileObj) {

    //check to see if user has a barber profile
    if (user.hasBarberProfile == true) return Object.assign(profileObj, canConfigureMembership(profile), user.User.canUpdate(), canUpdateMetrics());
    Object.defineProperty(user, "hasBarberProfile", {
        value: true,
        writable: true,
        enumerable: true
    });

    //assign user provided values to new barber profile
    var profile = {
        type: _profileTypes2.default[1],
        username: profileObj.username,
        premium: false,
        paymentInfo: user.paymentInfo,
        //set average haircut duration in seconds from barber profile
        avgCutDuration: profileObj.avgDuration || 0

    };
    //creates a new barber profile object
    return Object.assign(profile, canConfigureMembership(), _user2.default.canUpdate());
}

exports.default = Barber;
//# sourceMappingURL=barber.js.map