export interface ITodo{
    _id:string,
    userID?: string;
    todoTitle: string;
    todoDescription: string;
    todoYear: number;
    isCompleted: boolean;
    isPublic: boolean;
}

export interface ITodoList {
    data: ITodo[]
}