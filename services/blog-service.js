const {fetchAllBlogs,createNewBlog,updateBlogDetails} = require("../repository/blog_repository");
const customResponse = require('../utils/customResponse');

const getAllBlogs = async (req,res)=>{
    try{
        const blogs = await fetchAllBlogs();
        return customResponse(res,200,blogs,"Blog Get Method","Get");
    }
    catch(e){
        throw e;
    }
}

module.exports = {
    getAllBlogs
}