const Joi = require('joi');

const checkParams = Joi.object({
    id:Joi.number().required().greater(0).positive(),
});

const createComment = Joi.object({
    message:Joi.string().min(4).max(100).required(),
    blogId:Joi.number().greater(0).positive().required(),
    userId:Joi.number().greater(0).positive().required()

}); 

const commentSchema = {
    createComment,
    checkParams
}