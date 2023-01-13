const { 
    loginSchema,
    registerSchema,
    todoSchema
} = require("../lib/joi");

const validateLogin = (req, res, next) => {
    const data = loginSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};



const validateRegister = (req, res, next) => {
    const data = registerSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

const validateTodoPost = (req, res, next) => {
    const data = todoSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};



module.exports = {
    validateLogin , 
    validateRegister,
    validateTodoPost
}