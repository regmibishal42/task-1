const CommentModel = require('../models/commentModel');

const getAllComments = async()=>{
    return await CommentModel.findAll();
}

const getCommentById = async(id)=>{
    return await CommentModel.findByPk(id);
}

const createNewComment = async(data)=>{
    return await CommentModel.create(data);
}

const updateCommentById = async(id,message)=>{
    return await CommentModel.update({message},{where:{id}});
}

const deleteComment = async(id) =>{
        return await CommentModel.destroy(id);
}

module.exports = {
    getAllComments,
    getCommentById,
    createNewComment,
    updateCommentById,
    deleteComment
}