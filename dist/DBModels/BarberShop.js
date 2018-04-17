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
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=BarberShop.js.map