import User from "../models/User";
import { IUser } from "../types/user.types";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import config from "config"

export default class UserService{
    async getJWTToken(username: string, email: string){
        const user = {
            userName: username,
            email: email
        }
        
        return jwt.sign(user, config.get("jwtSecret"), {
            expiresIn: config.get("jwtExpiration")
        })

    }

    async getCurrentUser(_: Request, res: Response){
        const { email, username } = _.body
        return { email, username }
    }

    async findUser(email: string){
        const result  = await User.findOne({email: email})
        return result
    }

    async addUser(user: IUser){
        const result = await User.create(user)
        return result
    }

}