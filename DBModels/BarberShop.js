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