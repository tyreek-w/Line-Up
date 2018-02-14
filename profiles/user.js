"use strict";
//declaration entity file for user model
import profiles from "./profileTypes";

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
    let Object = parameters.Object;

    //creates a new user profile
    let state = {

        type: profiles.profileType[0],
        status: profiles.status[0],
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

}

export default User;
