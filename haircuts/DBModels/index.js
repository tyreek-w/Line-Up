const fs = require("fs"); // file system for grabbing files
const path = require("path");
const Sequelize = require('sequelize');
const db = require('../../config/DB/config_db');

// Load each model file
const models = Object.assign({}, ...fs.readdirSync(__dirname)
    .filter((file) =>
        (file.indexOf(".") !== 0) && (file !== 'index.js')
    )
    .map(function (file) {
        const model = require(path.join(__dirname, file));
        // console.log(model.init(db).tableName);
        return {
            [model.name]: model.init(db),
        };
    })
);

module.exports = models;