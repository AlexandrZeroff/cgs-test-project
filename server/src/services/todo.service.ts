import { ITodo } from "todos.type";
import TodoList from "../models/Todo"

export default class TodoService {
    async getTodosList() {
        return await TodoList.find();
    }

    async findTodo(id: string){
        return await TodoList.findById(id)
    }

    async createTodo(todo: ITodo){
        return await TodoList.create(todo)
    }

    async editTodo(id: string, todoBody: ITodo){
        return await TodoList.updateOne({_id: id}, todoBody)
    }

    async deleteTodo(id: string){
        return await TodoList.deleteOne({_id: id})
    }
}