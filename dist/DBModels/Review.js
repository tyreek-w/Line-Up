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
        Comment: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        Like: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        Rating: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    relations: (_relations = {
        belongsTo: "Haircut"
    }, _defineProperty(_relations, 'belongsTo', "User"), _defineProperty(_relations, 'belongsTo', "Barber"), _defineProperty(_relations, 'belongsTo', "BarberShop"), _relations),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Review.js.map