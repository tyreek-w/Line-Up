"use strict";

const profiles = require('./profileTypes');

function allowed(user){

  if(user.hasBarberShop == true){
    return false
  }
  else{
    return true
  }
}

function BarberShop(user, profileObj) {

  if(allowed(user) == true){

    let state = {
      type: profiles[2],
      username: profileObj.username,
      city: profileObj.city,
      state: profileObj.state
    }

  }
  else{
    // throw user already has profile error
  }

  return Object.assign(state);


}
