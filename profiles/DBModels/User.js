'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 4;

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
                {
                    hooks: {
                        beforeCreate: (user, options) => {
                            console.log();
                            user.password = this.generateHash(user.password, saltRounds);
                        }
                    }
                },

            )};

        static validPassword(testPass) {
            bcrypt.compare(testPass, this.passwordHash, (err, res) => {
               if(err) {return err;}
               return res;
            });
        }

        static generateHash(pass, saltRounds) {
            bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt using saltRounds provided
                bcrypt.hash(pass, salt, (err, hash) => { //generate hash using password and salt generated
                    return hash; //returns hashed password
                });
            }
        )}


        static associate(models) {
        }
    };