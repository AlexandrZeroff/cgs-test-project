import { Strategy, ExtractJwt } from "passport-jwt";
import UserService from "../services/user.service";
import config from 'config'
import { JwtPayload } from "jsonwebtoken";
import { PassportStatic } from "passport";

const userService = new UserService()

export const jwtAuth = (passport: PassportStatic) => {
    passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.get('jwtSecret')
    }, async (jwtPayload: JwtPayload, callback) => {
        try{
            const user = await userService.findUser(jwtPayload.email)
            if (user) {
                return callback(null, user)
            }else{
                return callback(null, false)
            }
        }catch(error){
            console.log(error)
        }
        
    }))
}

