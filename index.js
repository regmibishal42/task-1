const express = require('express');
const db = require('./config/db');
const blogs = require('./controllers/blogController');
const comments = require('./controllers/commentController')
const users = require('./controllers/userController');
const BlogModel = require('./models/blogModel');
const CommentModel = require('./models/commentModel');
const UserModel = require('./models/userModel');


const app = express();
app.use(express.json());

(async()=>{
    try{
        db.authenticate('connected');
    }
    catch(error){
        console.log('Database CONNECTIOON ERROR')
        console.log(error);
    }
})();

 db.sync({force:false})
// CommentModel.sync({alter:true});
// BlogModel.sync({alter:true});
// UserModel.sync({alter:true});

// Database Models Association

// one to many relationShip
BlogModel.hasMany(CommentModel);
CommentModel.belongsTo(BlogModel);

// One-to-Many
// Working
UserModel.hasMany(BlogModel);
BlogModel.belongsTo(UserModel);

// One-many
UserModel.hasMany(CommentModel);
CommentModel.belongsTo(UserModel);


app.use('/blog',blogs);
app.use('/comments',comments);
app.use('/users',users);


app.listen(3000,()=>{
    console.log('Server running on port 3000')
});

// Sequalize 
// 1 Has One --One - One
// 2.belongsTo -- one doctor looks many customers
//3. hasMany
//4. belongsToMany