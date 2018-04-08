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
        }
    },
    relations: {},
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Haircut.js.map