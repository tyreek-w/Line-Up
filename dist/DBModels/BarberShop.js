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
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    relations: (_relations = {
        hasMany: "Barber"
    }, _defineProperty(_relations, 'hasMany', "Review"), _defineProperty(_relations, 'hasMany', "Photo"), _defineProperty(_relations, 'BelongsTo', "Location"), _relations),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=BarberShop.js.map