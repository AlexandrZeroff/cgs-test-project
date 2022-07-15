import { Response, Request } from 'express'
import User from '../models/User'
import UserService from '../services/user.service'
import { hashSync, compareSync } from 'bcryptjs'

export class UserController {
  constructor(private userService: UserService) {}

  async registerUser(_: Request, res: Response) {
    const { username, email, password } = _.body

    const auth = await this.userService.findUser(email)
    if (auth) return res.status(400).send({ message: 'User already exists!' })

    const hashPassword = hashSync(password, 10)
    const registeredUser = await this.userService.addUser({
      username: username,
      email: email,
      password: hashPassword,
    })

    const token = this.userService.getJWTToken(
      registeredUser.username,
      registeredUser.email,
    )
    return { token }
  }

  async loginUser(_: Request, res: Response) {
    const { email, password } = _.body

    const auth = await this.userService.findUser(email)
    if (!auth) return res.status(400).send({ message: 'User not found!' })

    const comparePassword = compareSync(password, auth.password)

    if (!comparePassword)
      return res.status(400).send({ message: 'Wrong password!' })

    const token = this.userService.getJWTToken(auth.username, auth.email)

    return { token }
  }
}

const userController = new UserController(new UserService())
export default userController