import { Model, model, Schema } from 'mongoose'
import { IBaseTodo, ITodo } from '../types/todos.type'

const TodoSchema: Schema = new Schema({
  userID: {
    type: String,
    required: false,
  },
  todoTitle: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    required: false,
  },
  todoYear: {
    type: Number,
    default: new Date().getFullYear()
  },
  isCompleted: {
    type: Boolean,
    required: true
  },
  isPublic: {
    type: Boolean,
    required: true
  }
});

const TodoList: Model<IBaseTodo> = model("TodoList", TodoSchema);

export default TodoList;