"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profileTypes = require("./profileTypes");

var _profileTypes2 = _interopRequireDefault(_profileTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//declaration entity file for barber model

// const canUpdateMetrics = () => ({
//
//     updateWaitTime(reviews) {
//
//         let avgWaitTime = 0;
//         let waitTimeEntered = 0;
//
//         Object.keys(reviews).forEach(function (review) {
//             if (review.waitTime === null) {
//                 return;
//             }
//             avgWaitTime += review.waitTime;
//             waitTimeEntered++;
//         });
//         avgWaitTime /= waitTimeEntered;
//
//         Object.defineProperty(this, avgWait, {
//             value: avgWaitTime,
//             enumerable: true,
//             writable: true
//         });
//
//     },
//
//
//     updateAverageDuration(haircuts) {
//         let avgDuration = 0;
//
//         /*add duration of each haircut together*/
//         Object.keys(haircuts).forEach(function (haircut) {
//             avgDuration += haircut.duration;
//         });
//         //get average of all haircut durations and update barber profile
//         avgDuration /= haircuts.length;
//         this.avgCutDuration = avgDuration;
//     },
// });
//
//
// const canConfigureMembership = () => ({
//
// //barber can check if they are up to date on there payments
//     isPremium() {
//         if (this.paymentInfo.status === 'current') {
//             Object.defineProperty(barber, 'premium', {
//                 value: true,
//                 writable: true,
//                 enumerable: true
//             });
//         }
//     },
//
//
// //barber can check what subscription they currently have
//     checkTerm() {
//
//         if (this.paymentInfo.pastAmount === monthlyAmount) {
//             Object.defineProperty(this.paymentInfo, 'arrangement', {
//                 value: 'monthly',
//                 writable: true,
//                 enumerable: true
//             });
//         } else if (this.paymentInfo.pastAmount === yearlyAmount) {
//             Object.defineProperty(this.paymentInfo, 'arrangement', {
//                 value: 'yearly',
//                 writable: true,
//                 enumerable: true
//             });
//         }
//     }
// });

//Public Functions

//creates barber profile from user
function Barber(user, profileObj) {

    //assign user provided values to new barber profile
    var profile = {
        type: _profileTypes2.default.profileType[1],
        username: profileObj.username,
        premium: false,
        paymentInfo: user.paymentInfo
    };
    //creates a new barber profile object
    return Object.assign({}, profile);
}

exports.default = Barber;
//# sourceMappingURL=barber.js.map