'use strict';
const dbmain = require('../config/DB/DBmain');
const Sequelize = dbmain.Seq();
const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = {
    model: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
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
    relations: {
        hasMany: "Haircut"
        // hasMany: "Review",
        // BelongsTo: "Hairtype",
        // hasOne: "Photo",
        // hasOne: "Location"
    },
    options: {
        freezeTableName: true,
        hooks: {
            beforeCreate: function(model, options) {
                return new Promise((resolve, reject) => {
                    bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt using saltRounds provided
                        if (err) return reject(err);
                        bcrypt.hash(model.passwordHash, salt, (err, hash) => { //generate hash using password and salt generated
                            console.log("Getting password encrypted...");
                            model.passwordHash = hash;
                            return resolve(model, options)//sets user password to hash
                        });
                    });
                });

            }
        }
    }
};