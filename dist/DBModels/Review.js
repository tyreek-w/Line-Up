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
        Comment: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        Like: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        Rating: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        HaircutId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        UserId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        BarberId: {
            type: Sequelize.INTEGER,
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
//# sourceMappingURL=Review.js.map