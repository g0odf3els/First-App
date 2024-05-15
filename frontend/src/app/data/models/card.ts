import { Priority } from "../enums/priority";

export interface Card {
    id: string,
    boardId: string,
    listId: string,
    name: string,
    description: string,
    dueDate: Date,
    priority: Priority
}