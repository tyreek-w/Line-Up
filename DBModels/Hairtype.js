'use strict';
const dbmain = require('../config/DB/DBmain');
const Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false
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
        hasMany: "Haircut"
    },
    options: {
        freezeTableName: true
    }
};