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
        },
        HaircutId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    options: {
        freezeTableName: true
    }
};