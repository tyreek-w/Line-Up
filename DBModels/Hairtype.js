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
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        length: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        position: {
            type: Sequelize.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    },
    relations: {
        hasMany: "User",
        hasMany: "Haircut",
        belongsToMany: ("Hairstyle", { through: 'Hairstyle_Hairtype'})
    },
    options: {
        freezeTableName: true
    }
};