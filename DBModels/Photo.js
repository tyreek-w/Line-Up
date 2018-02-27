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
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    relations: {
        belongsTo: "Barber",
        belongsTo: "BarberShop"
    },
    options: {
        freezeTableName: true
    }
};