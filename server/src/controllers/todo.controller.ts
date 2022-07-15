import { Response, Request } from 'express'
import TodoService from '../services/todo.service'

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getTodoList(_: Request, res: Response) {
    const todos = await this.todoService.getTodosList()
    return res.send(todos)
  }

  async getSpecificTodo(_: Request, res: Response) {
    const { id } = _.params
    const todo = await this.todoService.findTodo(id)
    return res.send(todo)
  }

  async createTodo(_: Request, res: Response) {
    const { body } = _
    const todo = await this.todoService.createTodo(body)
    return res.send({ message: 'Task was successfully added!', todo: todo })
  }

  async editTodo(_: Request, res: Response) {
    const { id } = _.params
    const { body } = _
    const updatedTodo = await this.todoService.editTodo(id, body)
    return res
      .send({ message: 'Successfully updated!', updated: updatedTodo })
  }

  async deleteTodo(_: Request, res: Response) {
    const { id } = _.params
    await this.todoService.deleteTodo(id)
    return res.send({ message: 'Successfully deleted!' })
  }
}

const todoController = new TodoController(new TodoService())
export default todoController
