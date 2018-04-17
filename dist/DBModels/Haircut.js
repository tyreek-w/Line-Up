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
        length: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        BarberHaircutId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        UserId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        Beard: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    relations: {
        HasOne: "Photo"
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Haircut.js.map