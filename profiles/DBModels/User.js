'use strict';
const Sequelize = require('sequelize');

module.exports =
    class User extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
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
                    passwordHash: {
                        type: Sequelize.STRING,
                        allowNull: false
                    },
                    gender: {
                        type: Sequelize.TINYINT
                    },
                },
                {sequelize})
        };

        static associate(models) {
        }
    };