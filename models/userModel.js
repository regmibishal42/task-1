const {DataTypes} = require('sequelize');
const db = require('../config/db');

const UserModel = db.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING(150),
        allowNull:false,
    },

});

// UserModel.sync({force:true});

module.exports = UserModel;