const Joi = require('joi');


const create  = Joi.object({
    userName:Joi.string().min(4).max(12).required()
});

const checkParams  = Joi.object({
    id:Joi.number().required().greater(0).positive(),
});

const userSchema = {
    create,
    checkParams
};

module.exports = userSchema;