const {Sequelize} = require('sequelize');

const db = new Sequelize({
    database:'info_dev',
    username:'postgres',
    password:'admin',
    port:5432,
    host:'localhost',
    dialect: 'postgres',
    logging:false
});

module.exports = db;