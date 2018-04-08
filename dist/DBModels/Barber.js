'use strict';

var _relations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isPremium: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        UserId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    },
    relations: (_relations = {
        belongsTo: "User",
        hasMany: "Haircut"
    }, _defineProperty(_relations, 'hasMany', "Review"), _defineProperty(_relations, 'hasMany', "Service"), _defineProperty(_relations, 'hasOne', "Photo"), _relations),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Barber.js.map