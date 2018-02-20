'use strict';
const dbmain = require('../../config/DB/DBmain');
const Sequelize = dbmain.Seq();

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

    },
    options: {

    }
};