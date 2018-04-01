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
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    relations: {
        belongsTo: "Haircut"
    },
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Hairstyle.js.map