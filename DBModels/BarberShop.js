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
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    relations: {
        hasMany: "Barber",
        hasMany: "Review",
        hasMany: "Photo",
        BelongsTo: "Location"
    },
    options: {
        freezeTableName: true
    }
};