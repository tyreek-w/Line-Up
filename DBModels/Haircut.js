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
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        UserId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        BarberId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        HairtypeId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        ApprovedBy: {
            type: Sequelize.INTEGER
        }
    },
    relations: {
    },
    options: {
        freezeTableName: true
    }
};