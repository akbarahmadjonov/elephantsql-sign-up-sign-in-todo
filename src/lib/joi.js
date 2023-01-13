const { not } = require("joi");
const Joi = require("joi");



exports.loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});


exports.registerSchema = Joi.object({
    user_name: Joi.string().min(3).max(30).required(),
    phone: Joi.string().length(9).pattern(/^[0-9]+$/),
    email:Joi.string().max(50).email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});


exports.todoSchema = Joi.object({
    text:Joi.string().min(2).max(20).required()
})
