const {DataTypes} = require('sequelize');
const db = require('../config/db');

const BlogModel = db.define('blog_table',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        },
        unique:true,
        // one to one relation ship
    }
});
// BlogModel.sync({force:true});
//  BlogModel.sync({force:true});

module.exports = BlogModel;