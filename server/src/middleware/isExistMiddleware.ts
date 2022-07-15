import { Response, Request, NextFunction } from 'express'
import TodoList from '../models/Todo'
import { Model } from 'mongoose'

export class isExistMiddleWare {
  isExist<T>(model: Model<T>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const check = await TodoList.exists({ _id: id })
      if (check) {
        next()
      } else {
        res.status(400).send({ message: 'Task doesn`t exist' })
      }
    }
  }
}

const isExistValidator = new isExistMiddleWare()
export default isExistValidator