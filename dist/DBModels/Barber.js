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
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isPremium: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        UserId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        BarberShopId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Barber.js.map