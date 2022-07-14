import Joi from "joi";

export const userValidationSchema = Joi.object({
    username: Joi.string().min(2).max(40).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatar: Joi.string()
})