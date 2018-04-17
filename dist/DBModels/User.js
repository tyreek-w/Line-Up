'use strict';

var dbmain = require('../config/DB/DBmain');
var Sequelize = dbmain.Seq();
var bcrypt = require('bcrypt');
var saltRounds = 5;

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'active'
        },
        birthdate: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        passwordHash: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.TINYINT
        },
        paymentInfo: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: null
        }
    },
    options: {
        freezeTableName: true,
        hooks: {
            beforeCreate: function beforeCreate(model, options) {
                return new Promise(function (resolve, reject) {
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        //generate salt using saltRounds provided
                        if (err) return reject(err);
                        bcrypt.hash(model.passwordHash, salt, function (err, hash) {
                            //generate hash using password and salt generated
                            console.log("Getting password encrypted...");
                            model.passwordHash = hash;
                            return resolve(model, options); //sets user password to hash
                        });
                    });
                });
            }
        }
    }
};
//# sourceMappingURL=User.js.map