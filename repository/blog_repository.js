const BlogModel = require("../models/blogModel");
const db = require("../config/db");

const fetchAllBlogs = async()=>{
    return await BlogModel.findAll();
}

const fetchById = async(id) =>{
    return await db.query(`select * from blogs where id=${id}`);
}

const createNewBlog = async(data)=>{
    return await BlogModel.create(data);
}

const updateBlogDetails = async(id,title,description) =>{
    if(title?.length && !description?.length) return await BlogModel.update({title},{where:{id}});
    else if(!title?.length && description?.length) return await BlogModel.update({description},{where:{id}});
    else BlogModel.update({title,description},{where:{id}})
}

module.exports = {
    fetchAllBlogs,
    fetchById,
    createNewBlog,
    updateBlogDetails
};