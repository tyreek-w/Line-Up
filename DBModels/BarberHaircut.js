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
        HairtypeId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        HairstyleId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        BarberId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    relations: {
        HasMany: "Haircut",
        BelongsTo: "Barber"
    },
    options: {
        freezeTableName: true
    }
};