"use strict";
import profiles from "./profileTypes";
//declaration entity file for barber model


//Public Functions

//creates barber profile from user
function Barber(userId, profileObj) {

    //assign user provided values to new barber profile
    let profile = {
        type: profiles.profileType[1],
        userId: userId,
        username: profileObj.username,
        premium: profileObj.premium || false
    };
    //creates a new barber profile object
    return Object.assign({}, profile);

  }

export default Barber;
