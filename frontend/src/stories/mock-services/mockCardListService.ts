import { CardList } from '../../app/data/models/card-list';
import { BehaviorSubject } from 'rxjs';

export class mockCardListService {

    public cardListsSubject: BehaviorSubject<CardList[]> = new BehaviorSubject<CardList[]>([]);
    public cardLists$ = this.cardListsSubject.asObservable();

    constructor() {
        const initialCardLists: CardList[] = [
            {
                "id": "e1389304-466b-4931-ae9a-94df7c21b049",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "name": "To Do",
                "items": [
                    {
                        "id": "e84e8f4b-1ca0-4c55-80c1-8c68e72d5b23",
                        "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                        "listId": "e1389304-466b-4931-ae9a-94df7c21b049",
                        "name": "Card",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        "dueDate": new Date("2024-05-15T16:54:16.547"),
                        "priority": 2
                    },
                    {
                        "id": "f94eba62-f589-42e1-ac3a-c966d4c69172",
                        "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                        "listId": "e1389304-466b-4931-ae9a-94df7c21b049",
                        "name": "Card",
                        "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
                        "dueDate": new Date("2024-05-15T16:55:12.937"),
                        "priority": 0
                    }
                ]
            },
            {
                "id": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "name": "In Process",
                "items": [
                    {
                        "id": "bd96bfdb-6799-4f95-b243-8963f66cb22b",
                        "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                        "listId": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
                        "name": "Card",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "dueDate": new Date("2024-05-17T21:00:00"),
                        "priority": 0
                    },
                    {
                        "id": "8dd14ff9-bb3b-490a-94f8-0567dc6b668d",
                        "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                        "listId": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
                        "name": "Card",
                        "description": "There are many variations of passages of Lorem Ipsum available",
                        "dueDate": new Date("2024-05-15T16:54:55.845"),
                        "priority": 1
                    }
                ]
            },
            {
                "id": "5405d8df-6c37-43a6-85c4-671dbc1b1236",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "name": "Miscellaneous",
                "items": [
                    {
                        "id": "347435bc-f00b-4715-ae04-b710ac4085cf",
                        "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                        "listId": "5405d8df-6c37-43a6-85c4-671dbc1b1236",
                        "name": "Card",
                        "description": " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
                        "dueDate": new Date("2024-05-24T21:00:00"),
                        "priority": 1
                    }
                ]
            }
        ];

        this.cardListsSubject.next(initialCardLists);
    }

    loadCardListsPaged(boardId: string, page: number, pageSize: number) {
    }

    createCardList(cardList: CardList) {
    }

    updateCardList(cardLists: CardList) {
    }

    deleteCardList(cardList: CardList) {
    }
}
