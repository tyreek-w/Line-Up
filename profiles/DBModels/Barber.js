/*
* Barber DB class for MySQL
* Has a Userid Foreign Key*/
'use strict';
const Sequelize = require('sequelize');

module.exports =
    class Barber extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    username: {
                        type: Sequelize.STRING,
                        allowNull: false
                    },
                    isPremium: {
                        type: Sequelize.BOOLEAN,
                        allowNull: false,
                        defaultValue: false
                    }
                },
                {sequelize})
        };

        static associate(models) {
            this.belongsTo(models.User, { //associates Barber with User as a source, adds foreign key
                foreignKey: {
                    allowNull: false
                }
            })
        }
    };