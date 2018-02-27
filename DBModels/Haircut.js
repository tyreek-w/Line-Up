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
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    relations: {
        hasOne: "Hairstyle",
        hasOne: "Photo",
        BelongsTo: "User",
        BelongsTo: "Barber",
        hasMany: "Review",
        BelongsTo: "Hairtype"
    },
    options: {
        freezeTableName: true
    }
};