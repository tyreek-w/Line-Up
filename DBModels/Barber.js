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
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isPremium: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    relations: {
        belongsTo: "User",
        hasMany: "Haircut",
        hasMany: "Review",
        hasMany: "Service",
        hasOne: "Photo",
    },
    options: {
        freezeTableName: true
    }
};