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
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        }
    },
    blogId:{
        type:DataTypes.INTEGER,
        references:{
            model:'blog_tables',
            key:'id'
        }
    }
});
// CommentModel.sync({force:true});


module.exports = CommentModel;