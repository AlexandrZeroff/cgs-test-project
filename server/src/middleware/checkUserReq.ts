import { Response, Request, NextFunction } from 'express'
import { userValidationSchema } from "../validation/user.validation.schema";

export function checkUserReq(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    }
  
    const { error, value } = userValidationSchema.validate(req.body, options)
    if (error) {
      res
        .status(400)
        .send({
          message: `User data validation error: ${error.details
            .map((x) => x.message)
            .join(', ')}`,
        })
    } else {
      req.body - value
      next()
    }
  }
