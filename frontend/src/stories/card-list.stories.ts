import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from '../app/components/card-list/card-list.component';
import { CardListService } from '../app/services/card-list.service';
import { CardService } from '../app/services/card.service';
import { mockCardListService } from './mock-services/mockCardListService';

const meta: Meta<CardListComponent> = {
    title: 'CardListComponent',
    component: CardListComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule],
            providers: [
                { provide: CardListService, useClass: mockCardListService },
                { provide: CardService, useClass: mockCardListService },
            ],
        }),
    ],
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CardListComponent>;


export const Default: Story = {
    args: {
        cardList:
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
        }
    }
};
