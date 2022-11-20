const Joi = require('joi');


const create = Joi.object({
    title:Joi.string().min(4).max(50).required(),
    description:Joi.string().min(4).max(100).required(),
    userId:Joi.number().greater(0).positive().required()
});

const update = Joi.object({
    title:Joi.string().min(4).max(50).optional(),
    description:Joi.string().min(4).max(100).optional(),
    id:Joi.number().required().greater(0).positive()
});

const blogSchema = {
    create,
    update
}

module.exoprts =blogSchema;