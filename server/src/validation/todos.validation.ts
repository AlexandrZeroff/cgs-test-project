import Joi from 'joi'

export const todoSchema = Joi.object({
  userID: Joi.string(),
  todoTitle: Joi.string().max(80).required(),
  todoDescription: Joi.string().max(10000).required(),
  isCompleted: Joi.boolean(),
  isPublic: Joi.boolean(),
})


