'use strict';
const dbmain = require('../config/DB/DBmain');
const Sequelize = dbmain.Seq();

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
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    relations: {
        belongsTo: "Haircut",
        belongsTo: "User",
        belongsTo: "Barber",
        belongsTo: "BarberShop"
    },
    options: {
        freezeTableName: true
    }
};