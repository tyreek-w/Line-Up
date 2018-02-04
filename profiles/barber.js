"use strict";
const memberPlans = require('./barberMemberInfo');
const creditOptions = require('./barberMemberInfo')
const profiles = require('./profileTypes');
const User = require('./user');
//declaration entity file for barber model

const monthlyAmount = 0;
const annualAmount = 0;

const canChooseBarbershop = () => ({

});

const canUpdateMetrics = () => ({

    updateAverageDuration: function(haircuts){
      let avgDuration = 0;

      //add duration of each haircut together
      for(haircut in haircuts){

        for(duration in haircut){
          avgDuration += duration;
        };
      };

      //get average of all haircut durations and update barber profile
      avgDuration = avgDuration/haircuts.length;
      this.avgCutDuration = avgDuration;
    },

    updateWaitTime: function(reviews){

      let avgWaitTime = 0;
      let waitTimeEntered = 0

      for(review in reviews){
        for(waitTime in review){

          if(waitTime !== null){
            avgWaitTime += waitTime;
            waitTimeEntered++;
          }

        };
      };

      avgWaitTime = avgWaitTime/waitTimeEntered;

      Object.defineProperty(this, avgWait, {
        value: avgWaitTime,
        enumerable: true,
        writable: true
      });

    }
});


const canConfigureMembership = () => ({

  //barber can check if they are up to date on there payments
  isPremium: function(){
    if(this.paymentInfo.status == 'current'){
      Object.defineProperty(barber, 'premium', {
         value: true,
         writable: true,
         enumerable: true
      });
    }
  },


  //barber can check what subscription they currently have
  checkTerm: function(){

    if(this.paymentInfo.pastAmount == monthlyAmount){
      Object.defineProperty(this.paymentInfo, 'arrangement', {
         value: 'monthly',
         writable: true,
         enumerable: true
      });
    }else if(this.paymentInfo.pastAmount == yearlyAmount){
      Object.defineProperty(this.paymentInfo, 'arrangement', {
         value: 'yearly',
         writable: true,
         enumerable: true
      });
    }
  }
});

//Public Functions

//creates barber profile from user
function Barber (user,profileObj) {

    //check to see if user has a barber profile
    if(user.hasBarberProfile == true){
      //creates a barber profile object
      return Object.assign(profileObj, canConfigureMembership(profile), user.canUpdate());
    }
    else{

      Object.defineProperty(user, 'hasBarberProfile', {
        value: true,
        writable: true,
        enumerable: true
      });

      //assign user provided values to new barber profile
      let profile = {
        type: profiles[1],
        username: profileObj.username,
        premium: false,
        paymentInfo: user.paymentInfo,
        //set average haircut duration in seconds from barber profile
        avgCutDuration: profileObj.avgDuration || 0

      }
      //creates a new barber profile object
      return Object.assign(profile, canConfigureMembership(), User.canUpdate());
    }

  }

  module.exports = Barber;
