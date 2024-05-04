import { Card } from "./card";

export interface CardList {
    id: string,
    name: string,
    items: Card[],
}