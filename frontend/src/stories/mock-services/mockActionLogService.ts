import { Observable, of } from "rxjs";
import { ActionLog } from "../../app/data/models/action-log";

export class mockActionLogService {

    loadBoardActionLogPaged(boardId: string, page: number, pageSize: number): Observable<ActionLog[]> {
        const actionLogs: ActionLog[] = [
            {
                "id": "df588ead-8d86-43f4-8497-81218d78b81c",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "f94eba62-f589-42e1-ac3a-c966d4c69172",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:55:25.668374"),
                "affectedProperties": [
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:55:25 PM"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "Low"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "f94eba62-f589-42e1-ac3a-c966d4c69172"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:55:12 PM"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "e1389304-466b-4931-ae9a-94df7c21b049"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "To Do"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                    }
                ]
            },
            {
                "id": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "8dd14ff9-bb3b-490a-94f8-0567dc6b668d",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:55:11.798548"),
                "affectedProperties": [
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": "There are many variations of passages of Lorem Ipsum available"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "8dd14ff9-bb3b-490a-94f8-0567dc6b668d"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:55:11 PM"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "Medium"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "In Process"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:55 PM"
                    },
                    {
                        "actionLogId": "522ed085-ce00-4c74-91dc-50f9aea7f9c5",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "afd2a0aa-a451-4472-93b1-9e1575d4c39b"
                    }
                ]
            },
            {
                "id": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "347435bc-f00b-4715-ae04-b710ac4085cf",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:54:54.866896"),
                "affectedProperties": [
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/24/2024 9:00:00 PM"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "347435bc-f00b-4715-ae04-b710ac4085cf"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "Medium"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "Miscellaneous"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:54 PM"
                    },
                    {
                        "actionLogId": "e48370d5-e422-4ca5-8dbd-cf4ee1f7f42a",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "5405d8df-6c37-43a6-85c4-671dbc1b1236"
                    }
                ]
            },
            {
                "id": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "bd96bfdb-6799-4f95-b243-8963f66cb22b",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:54:42.173836"),
                "affectedProperties": [
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/17/2024 9:00:00 PM"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "Low"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "bd96bfdb-6799-4f95-b243-8963f66cb22b"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "afd2a0aa-a451-4472-93b1-9e1575d4c39b"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:42 PM"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "In Process"
                    },
                    {
                        "actionLogId": "f2b33c91-167f-4a05-9a19-2db405d8e5c7",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    }
                ]
            },
            {
                "id": "9e85843e-27c8-486c-90a9-6dfb96631983",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "e84e8f4b-1ca0-4c55-80c1-8c68e72d5b23",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:54:32.688357"),
                "affectedProperties": [
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "e1389304-466b-4931-ae9a-94df7c21b049"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:32 PM"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:16 PM"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "To Do"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "High"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    },
                    {
                        "actionLogId": "9e85843e-27c8-486c-90a9-6dfb96631983",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "e84e8f4b-1ca0-4c55-80c1-8c68e72d5b23"
                    }
                ]
            },
            {
                "id": "6dd55e23-4762-467a-8f3e-6981c73b5502",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "5405d8df-6c37-43a6-85c4-671dbc1b1236",
                "entityName": "Miscellaneous",
                "entityType": "CardList",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:54:15.512327"),
                "affectedProperties": [
                    {
                        "actionLogId": "6dd55e23-4762-467a-8f3e-6981c73b5502",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "6dd55e23-4762-467a-8f3e-6981c73b5502",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Miscellaneous"
                    },
                    {
                        "actionLogId": "6dd55e23-4762-467a-8f3e-6981c73b5502",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:15 PM"
                    },
                    {
                        "actionLogId": "6dd55e23-4762-467a-8f3e-6981c73b5502",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "5405d8df-6c37-43a6-85c4-671dbc1b1236"
                    }
                ]
            },
            {
                "id": "52aa80a5-4c03-497c-8c84-146e819fe0cc",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
                "entityName": "In Process",
                "entityType": "CardList",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:54:03.860028"),
                "affectedProperties": [
                    {
                        "actionLogId": "52aa80a5-4c03-497c-8c84-146e819fe0cc",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "afd2a0aa-a451-4472-93b1-9e1575d4c39b"
                    },
                    {
                        "actionLogId": "52aa80a5-4c03-497c-8c84-146e819fe0cc",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:54:03 PM"
                    },
                    {
                        "actionLogId": "52aa80a5-4c03-497c-8c84-146e819fe0cc",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "In Process"
                    },
                    {
                        "actionLogId": "52aa80a5-4c03-497c-8c84-146e819fe0cc",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    }
                ]
            },
            {
                "id": "956493b3-a488-46f1-806f-3ce4779d5718",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "e1389304-466b-4931-ae9a-94df7c21b049",
                "entityName": "To Do",
                "entityType": "CardList",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:53:59.210999"),
                "affectedProperties": [
                    {
                        "actionLogId": "956493b3-a488-46f1-806f-3ce4779d5718",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:53:59 PM"
                    },
                    {
                        "actionLogId": "956493b3-a488-46f1-806f-3ce4779d5718",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "e1389304-466b-4931-ae9a-94df7c21b049"
                    },
                    {
                        "actionLogId": "956493b3-a488-46f1-806f-3ce4779d5718",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "To Do"
                    },
                    {
                        "actionLogId": "956493b3-a488-46f1-806f-3ce4779d5718",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    }
                ]
            },
            {
                "id": "79d1bbca-f5d1-47aa-8dfc-10566c04742c",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityName": "Personal",
                "entityType": "Board",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:53:51.495755"),
                "affectedProperties": [
                    {
                        "actionLogId": "79d1bbca-f5d1-47aa-8dfc-10566c04742c",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Personal"
                    },
                    {
                        "actionLogId": "79d1bbca-f5d1-47aa-8dfc-10566c04742c",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    },
                    {
                        "actionLogId": "79d1bbca-f5d1-47aa-8dfc-10566c04742c",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:53:51 PM"
                    }
                ]
            }
        ];

        return of(actionLogs);
    }

    loadCardActionLogPaged(cardId: string, page: number, pageSize: number): Observable<ActionLog[]> {
        const actionLogs: ActionLog[] = [
            {
                "id": "df588ead-8d86-43f4-8497-81218d78b81c",
                "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "entityId": "f94eba62-f589-42e1-ac3a-c966d4c69172",
                "entityName": "Card",
                "entityType": "Card",
                "action": 0,
                "creationTime": new Date("2024-05-15T16:55:25.668374"),
                "affectedProperties": [
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "ListId",
                        "oldValue": undefined,
                        "newValue": "e1389304-466b-4931-ae9a-94df7c21b049"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "DueDate",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:55:12 PM"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Id",
                        "oldValue": undefined,
                        "newValue": "f94eba62-f589-42e1-ac3a-c966d4c69172"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Priority",
                        "oldValue": undefined,
                        "newValue": "Low"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "CreationTime",
                        "oldValue": undefined,
                        "newValue": "5/15/2024 4:55:25 PM"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Name",
                        "oldValue": undefined,
                        "newValue": "Card"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "Description",
                        "oldValue": undefined,
                        "newValue": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "ListName",
                        "oldValue": undefined,
                        "newValue": "To Do"
                    },
                    {
                        "actionLogId": "df588ead-8d86-43f4-8497-81218d78b81c",
                        "propertyName": "BoardId",
                        "oldValue": undefined,
                        "newValue": "edee4bf4-617c-4e54-8183-24bfbb22dd34"
                    }
                ]
            }]
        return of(actionLogs);
    }
}
