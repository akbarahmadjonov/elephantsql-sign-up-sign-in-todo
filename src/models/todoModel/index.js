const { fetch , fetchAll } = require('../../lib/connectdb')
const { GETALL , CREATE_TODO, GETONETODO , PUTTODO , DELETETODO}  =require('./model')
class TodoModel {
    async getTodo(userId){
        let todos = await fetchAll(GETALL ,userId)
        return todos
    }

    async postTodo({text} , userId){
        let todo = await fetch(CREATE_TODO , text, userId)
        return todo
    }

    async putTodo({id} , {text} ){
        let todo = await fetch(PUTTODO , id , text)
        return todo
    }

    async deleteTodo({id}){
        let todo = await fetch(DELETETODO , id)
        return todo
    }

    async getOneTodo(id){
        let todo = await fetch(GETONETODO , id)
        return todo
    }

}

module.exports = new TodoModel()