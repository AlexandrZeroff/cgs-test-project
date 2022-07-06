import { Router } from 'express'
import handleError from '../../middleware/errorHandle.middleware'
import TodoList from '../../models/Todo'
import isExistValidator from '../../middleware/isExistMiddleware'
import todoController from '../../controllers/todo.controller'
import { checkReqBody } from '../../middleware/checkReqBodyMiddleware'

const todosRouter: Router = Router()

const { isExist } = isExistValidator

todosRouter.get(
  '',
  todoController.getTodoList.bind(todoController),
  handleError,
)
todosRouter.get(
  '/:id',
  isExist(TodoList),
  todoController.getSpecificTodo.bind(todoController),
  handleError,
)
todosRouter.post(
  '/add',
  checkReqBody,
  todoController.createTodo.bind(todoController),
  handleError,
)
todosRouter.put(
  '/edit/:id',
  isExist(TodoList),
  checkReqBody,
  todoController.editTodo.bind(todoController),
  handleError,
)
todosRouter.delete(
  '/delete/:id',
  isExist(TodoList),
  todoController.deleteTodo.bind(todoController),
  handleError,
)

export default todosRouter
