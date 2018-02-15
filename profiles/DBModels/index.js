const fs = require("fs"); // file system for grabbing files
const path = require("path");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config')[env];
//Initializes db and uses config variables to populate verification fields
const db = new Sequelize(config.database.db_name, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.port,
    //limits Operator Alias use for security reasons
    operatorsAliases: false
});

//Connects db, forces all models to sync to test databases
db.sync({force: true, match: /_test$/})
    .then(() => {
        console.log("Database is successfuly connected");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = db;

// Load each model file
const models = Object.assign({}, ...fs.readdirSync(__dirname)
    .filter((file) =>
        (file.indexOf(".") !== 0) && (file !== 'index.js')
    )
    .map(function (file) {
        const model = require(path.join(__dirname, file));
        // console.log(model.init(sequelize).tableName)
        return {
            [model.name]: model.init(db),
        };
    })
);

// Load model associations
for (const model of Object.keys(models)) {
    typeof models[model].associate === 'function' && models[model].associate(models);
}

module.exports = models;

