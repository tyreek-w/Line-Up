'use strict';

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    relations: {
        belongsTo: "Barber"
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Service.js.map