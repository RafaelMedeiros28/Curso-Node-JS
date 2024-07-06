const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas', 'root', 'korn6669', {
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = connection;