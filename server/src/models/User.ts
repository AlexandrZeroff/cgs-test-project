import { string } from 'joi'
import { now, Model, model, Schema } from 'mongoose'
import { IUser } from 'user.types'

const userSchema: Schema = new Schema({
  username: {
    type: string,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: now(),
  },
})


const User: Model<IUser> = model('User', userSchema)

export default User
