'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

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
                {sequelize},

            )};

        // static validPassword(testPass) {
        //     bcrypt.compare(testPass, this.passwordHash, (err, res) => {
        //         if (err) {
        //             return err;
        //         }
        //         return res;
        //     });
        // }


        static associate(models) {
        }
    };