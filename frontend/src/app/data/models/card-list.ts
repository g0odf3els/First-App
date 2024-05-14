import { Card } from "./card";

export interface CardList {
    id: string,
    boardId: string,
    name: string,
    items: Card[],
}