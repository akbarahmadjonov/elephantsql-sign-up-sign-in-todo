const Todo = require('../models/todoModel')
const ApiError = require('../error/ApiError')


class UserController {
    async getTodo(req, res , next) {
        try{
            return res.status(200).json(await Todo.getTodo(req.user.id))
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }
    async postTodo(req,res , next){
        try{
            let todo = await Todo.postTodo(req.body,req.user.id)
            return res.status(201).json(todo)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async putTodo(req,res, next){
        try{
            let todo = await Todo.getOneTodo(req.params.id)
            if(!todo){
                return next(ApiError.badRequest('Todo is not defined'))
            }
            await Todo.putTodo(req.params , req.body )
            return res.status(201).json("updated")
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteTodo(req,res, next){
        try{
            let todo = await Todo.getOneTodo(req.params.id)
            if(!todo){
                return next(ApiError.badRequest('Todo is not defined'))
            }
             await Todo.deleteTodo(req.params)
            return res.status(201).json("deleted")
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }


    async getOneTodo(id){
        try{
            let todo = await Todo.getOneTodo(id)
            if(!todo){
                return next(ApiError.badRequest('This email already exists'))
            }
            return todo 
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }
   
}

module.exports = new UserController()