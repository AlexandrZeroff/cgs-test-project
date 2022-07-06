import { Document } from 'mongoose'

export interface IBaseTodo extends Document {
    userID?: string;
    todoTitle: string;
    todoDescription: string;
    todoYear: number;
    isCompleted: boolean;
    isPublic: boolean;
}

export interface ITodo extends IBaseTodo {
    id: string;
}
