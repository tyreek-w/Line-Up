'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        length: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        position: {
            type: Sequelize.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    },
    relations: _defineProperty({
        hasMany: "User"
    }, 'hasMany', "Haircut"),
    options: {
        freezeTableName: true
    }
};
//# sourceMappingURL=Hairtype.js.map