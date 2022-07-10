import HttpService from "./http.service";
import { ITodo } from "../interfaces/todo";


class TodoService extends HttpService{
    constructor(){
        super()
    }

    getAllTodos():Promise<ITodo[]>{
        return this.get("/")
    }

    getOneTodo(id: string):Promise<any> {
        return this.getOne(`/`, id)
    }

    createTodo(todo: ITodo){
        return this.create(todo, "/add")
    }

    updateTodo(id: string, todo: ITodo){
        return this.update(todo, "/edit", id)
    }

    deleteTodo(id: string){
        return this.delete("/delete", id)
    }

}

export default TodoService