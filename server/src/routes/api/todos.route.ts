import { Router } from 'express'
import handleError from '../../middleware/errorHandle.middleware'
import TodoList from '../../models/Todo'
import isExistValidator from '../../middleware/isExistMiddleware'
import todoController from '../../controllers/todo.controller'
import { checkReqBody } from '../../middleware/checkReqBodyMiddleware'
import { responseHandler } from '../../middleware/responseHandler'
import passport from 'passport'

const todosRouter: Router = Router()

const { isExist } = isExistValidator

todosRouter.get(
  '',
  passport.authenticate('jwt', { session: false }),
  responseHandler(todoController.getTodoList.bind(todoController)),
  handleError,
)
todosRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  isExist(TodoList),
  responseHandler(todoController.getSpecificTodo.bind(todoController)),
  handleError,
)
todosRouter.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  checkReqBody,
  responseHandler(todoController.createTodo.bind(todoController)),
  handleError,
)
todosRouter.put(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  isExist(TodoList),
  checkReqBody,
  responseHandler(todoController.editTodo.bind(todoController)),
  handleError,
)
todosRouter.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  isExist(TodoList),
  responseHandler(todoController.deleteTodo.bind(todoController)),
  handleError,
)

export default todosRouter
