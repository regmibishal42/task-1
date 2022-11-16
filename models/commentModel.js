const {DataTypes} = require('sequelize');
const db = require('../config/db');

const CommentModel = db.define('comment_table',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    message:{
        type: DataTypes.STRING(100),
        allowNull:false
    }
});
// CommentModel.sync({force:true});


module.exports = CommentModel;