const {DataTypes} = require('sequelize');
const db = require('../config/db');

const UserModel = db.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userName:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },

});

// UserModel.sync({force:true});

module.exports = UserModel;