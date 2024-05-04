import { Priority } from "../enums/priority";

export interface Card {
    listId: string,
    id: string,
    name: string,
    description: string,
    dueDate: Date,
    priority: Priority
}