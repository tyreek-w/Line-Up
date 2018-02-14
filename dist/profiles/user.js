"use strict";
//declaration entity file for user model

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profileTypes = require("./profileTypes");

var _profileTypes2 = _interopRequireDefault(_profileTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const canGenerateId = () => ({
//
//     generateId(x) {
//
//         let someId = x;
//
//         //checks to see if there is an existing id
//         if (this.id) {
//             console.log("There is already an existing id");
//             return
//         }
//         console.log("attempting to add id...");
//         //adds new id property to user object
//         Object.defineProperty(this, "id", {
//             value: someId
//         });
//     },
// });

//gives user ability to check if payment is setup
// const checkPaymentInfo = (state) => ({
//
//     hasPaymentMethod: () => {
//       //check if paymentInfo is empty
//       if(state.paymentInfo != null){
//         return true
//       }
//       else{
//         return false
//       }
//     }
// });

//Public variables and objects

function User(parameters) {
    var Object = parameters.Object;

    //creates a new user profile
    var state = {

        type: _profileTypes2.default.profileType[0],
        status: _profileTypes2.default.status[0],
        firstName: Object.firstName,
        lastName: Object.lastName,
        birthdate: Object.birthdate,
        email: Object.email,
        phoneNumber: Object.phoneNumber,
        city: Object.city,
        state: Object.state,
        country: Object.country,
        gender: Object.gender,
        paymentInfo: null,
        dateCreated: new Date()

    };

    return Object.assign({}, state);
}exports.default = User;
//# sourceMappingURL=user.js.map