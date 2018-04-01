'use strict';

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
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    relations: _defineProperty({
        belongsTo: "Barber"
    }, 'belongsTo', "BarberShop"),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Photo.js.map