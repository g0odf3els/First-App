import { ActionHistoryComponent } from "../app/components/action-history/action-history.component";
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ActionHistoryComponent> = {
    title: 'ActionHistoryComponent',
    component: ActionHistoryComponent,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<ActionHistoryComponent>;


export const Default: Story = {
    args: {
        actionLogs: [
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
            }]
    }
};
