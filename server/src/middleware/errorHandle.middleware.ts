import { Response, Request, NextFunction } from 'express'
import { CustomError } from '../types/errors.type'

function handleError(
  err: CustomError,
  req: Request,
  res: Response
) {
  const status = err.status || 400
  const message = err.message || 'Unknown error'
  res.status(status).json({ message: message })
}

export default handleError
