'use strict';
const dbmain = require('../config/DB/DBmain');
const Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        subtype: {
            type: Sequelize.STRING,
            allowNull: false
        },
        UserId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    relations: {
        BelongsTo: dbmain.model("User")
    },
    options: {
        freezeTableName: true
    }
};