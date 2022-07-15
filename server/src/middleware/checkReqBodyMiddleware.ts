import { Response, Request, NextFunction } from 'express'
import { todoSchema } from '../validation/todos.validation'

export function checkReqBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  }

  const { error, value } = todoSchema.validate(req.body, options)
  if (error) {
    res
      .status(400)
      .send({
        message: `Validation error: ${error.details
          .map((x) => x.message)
          .join(', ')}`,
      })
  } else {
    req.body - value
    next()
  }
}
