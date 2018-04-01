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
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    relations: (_relations = {
        hasOne: "Hairstyle"
    }, _defineProperty(_relations, 'hasOne', "Photo"), _defineProperty(_relations, 'BelongsTo', "User"), _defineProperty(_relations, 'BelongsTo', "Barber"), _defineProperty(_relations, 'hasMany', "Review"), _defineProperty(_relations, 'BelongsTo', "Hairtype"), _relations),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Haircut.js.map