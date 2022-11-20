const CommentModel = require('../models/commentModel');
const {getAllComments,getCommentById,createNewComment,updateCommentById,deleteComment} = require('../repository/comment-repository');
const customResponse = require('../utils/customResponse');
const commentSchema = require('../validator/comment_validator');


const getComments = async(req,res,next) =>{
    try{
        const comments = await getAllComments();
        return customResponse(res,200,comments,"Comments Get Method","get");
    }
    catch(e){
        throw e;
    }
};

// get a particular blog by its id
const getComment = async(req,res,next) =>{
    try{
        const {id} = req.params;
        await commentSchema.checkParams.validateAsync({id});
        const comment = getCommentById(id);
        return customResponse(res,200,comment,"Comment Get Method","get");
    }catch(e){
        throw e;
    }
};

// create new comment
const postNewComment = async(req,res,next) =>{
    try {
        const {message,blogId,userId} = req.body;
        await commentSchema.createComment.validateAsync({message,blogId,userId});
        const postedComment = await createNewComment({message,userId,blogId});
        return customResponse(res,200,postedComment,"Comment Post Method","Post");
    } catch (error) {
        throw(error);
    }
}

//upadte comment
const updateCommentDetails = async(req,res,next) =>{
    try {
        const {id} = req.params;
        const {message} = req.body;
        await commentSchema.updateComment.validateAsync({id,message});
        const data = await updateCommentById(id,message);
        return customResponse(res,200,data,"Comment Update Method","Put");
    } catch (error) {
        throw error;
    }
}

// delete Comment
const deleteCommentById = async(req,res,next)=>{
    try{
        const {id} = req.params;
        await commentSchema.checkParams.validateAsync({id});
        const data = await deleteComment(id);
        return customResponse(res,200,data,'Comment Delete Method','Delete')
    }catch(e){
        throw e;
    }
};

module.exports = {
    getComment,
    getComments,
    postNewComment,
    updateCommentDetails,
    deleteCommentById
}
