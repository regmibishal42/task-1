const {fetchAllBlogs,createNewBlog,updateBlogDetails} = require("../repository/blog_repository");
const customResponse = require('../utils/customResponse');
const blogSchema = require('../validator/blogValidator');

const getAllBlogs = async (req,res)=>{
    try{
        const blogs = await fetchAllBlogs();
        return customResponse(res,200,blogs,"Blog Get Method","Get");
    }
    catch(e){
        throw e;
    }
};

const createBlog = async(req,res) =>{
    try{
        const {title,description,userId} = req.body;
        await blogSchema.create.validateAsync({title,description,userId});
        const data = await createNewBlog({title,description,userId});
        return customResponse(res,200,data,"Blog POST Method","post");
    }catch(e){
        throw e;
    }
}

module.exports = {
    getAllBlogs,
    createBlog
}

// const Child = sequelize.define('Child', {
//     age: Sequelize.STRING,
//     fatherId: {
//        type: Sequelize.INTEGER,
//        references: {
//           model: 'fathers', // 'fathers' refers to table name
//           key: 'id', // 'id' refers to column name in fathers table
//        }
//     }
// });
