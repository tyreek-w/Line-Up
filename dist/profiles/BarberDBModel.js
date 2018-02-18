"use strict";

var Barber = sequelize.define("barber", {
    id: {
        type: Sequelize.INTEGER
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.TEXT("tiny"),
        defaultValue: "active"
    },
    birthdate: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.TINYINT
    },
    dateCreated: {
        type: Sequelize.DATE
    }

});
//# sourceMappingURL=BarberDBModel.js.map