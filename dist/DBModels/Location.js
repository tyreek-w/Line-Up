'use strict';

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        streetAddress: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        zipCode: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING

        },
        UserId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    relations: {},
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Location.js.map