"use strict";
//declaration entity file for user model
import profiles from "./profileTypes";

const active = true;

//validates info before user can be created
const verifyInfo = function(obj) {

    if(typeof obj.firstName !== "String"){
        //throw not correct type error
        return false;
    }else if(typeof obj.lastName !== "String" ){
        //throw not correct type error
        return false;
    }else if(typeof obj.birthdate !== "String"){
        //throw incorrect birthDate error
        return false;
    }else if(typeof obj.email !== "String"){
        //throw incorrect email error
        return false;
    }else if(typeof obj.phoneNumber !== "String"){
        //throw incorrect phone format error
        return false;
    }else if((typeof obj.city && typeof obj.state) !== "String"){
        //throw invalid location format error
        return false;
    }else if(typeof obj.country !== "String"){
        //throw invalid country format error
        return false;
    }else if(typeof obj.gender !== "String"){
        //incorrect format
        return false;
    }
    else{
        return true;
    }
};

//generates id for database storage
const canActivate = (info) => ({

    activate(verified){
        if(verified){
          info.status = active;
        }
        else{
          //Error: User is not a verified user
        }
    }
});

const canGenerateId = () => ({

    generateId(x) {

        let someId = x;

        //checks to see if there is an existing id
        if (this.id) {
            console.log("There is already an existing id");
            return
        }
        console.log("attempting to add id...");
        //adds new id property to user object
        Object.defineProperty(this, "id", {
            value: someId
        });
    },
});

//gives user ability to check if payment is setup
const checkPaymentInfo = (state) => ({

    hasPaymentMethod: () => {
      //check if paymentInfo is empty
      if(state.paymentInfo != null){
        return true
      }
      else{
        return false
      }
    }
});

//Public variables and objects

function User (info, verified) {

  if(verified){
    //checks to see if this is an existing user
    if(info.dateCreated){
      if(info.status == active){
          return Object.assign(info, canUpdate(info), checkPaymentInfo(info));
      }
      else{
        //give option to activate profile
        return Object.assign(info, canActivate(info));
      }
    }
    else {
      if(verifyInfo(obj)){
          console.log(error);
      }
      else{
            //creates a new user profile
            let state = {

                type: profiles[0],
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

            }


            Object.defineProperty(state, "hasBarberProfile", {
                value: false,
                enumerable: true,
                writable: true
            });

            return Object.assign(state, canUpdate(), canGenerateId(), checkPaymentInfo());
        }
    }
  }
  else{
    //Error: User has not been verified
  }
}

//gives user ability to update personal info
const canUpdate = () => ({

    //enter key value object of info to update
    update: function(key, value){

      if(this.hasOwnProperty(key)){
        Object.defineProperty(this, key, {
          value: value,
          writable: true,
          configurable: true,
          enumerable: true
        });
      }
      else{
        console.log("Could not find a matching key value pair");
        //Error: this property does not exist
      }

    }
});

export default {User, canUpdate};
