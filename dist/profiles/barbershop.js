"use strict";

var profiles = require("./profileTypes");

function BarberShop(user, profileObj) {
    var state = {
        type: profiles.profileType[2],
        shopName: profileObj.shopName,
        city: profileObj.city,
        state: profileObj.state
    };
    return Object.assign({}, state, user);
}

module.exports = BarberShop;
//# sourceMappingURL=barbershop.js.map