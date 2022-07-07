import { Response, Request, NextFunction } from "express";

export const responseHandler = (func: any) => {
    return async (_: Request, res: Response, next: NextFunction) => {
        try{
            const result = await func(_, res, next)
            res.status(200).send(result)
        } catch (error){
            res.status(400).send({message: "Something went wrong :("})
        }
    }
}