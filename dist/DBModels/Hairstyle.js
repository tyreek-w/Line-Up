'use strict';

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();

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
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        BarberId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    },
    relations: {
        belongsToMany: "Haircut"
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Hairstyle.js.map