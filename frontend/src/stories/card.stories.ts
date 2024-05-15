import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { CardComponent } from "../app/components/card/card.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from '../app/services/card.service';
import { CardListService } from '../app/services/card-list.service';
import { mockCardListService } from './mock-services/mockCardListService';
import { mockCardService } from './mock-services/mockCardService';


const meta: Meta<CardComponent> = {
    title: 'CardComponent',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule],
            providers: [
                { provide: CardListService, useClass: mockCardListService },
                { provide: CardService, useClass: mockCardService }
            ],
        }),
    ],
    tags: ['autodocs'],
    argTypes: {},
};


export default meta;
type Story = StoryObj<CardComponent>;


export const Default: Story = {
    args: {
        card: {
            "id": "8dd14ff9-bb3b-490a-94f8-0567dc6b668d",
            "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
            "listId": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
            "name": "Card",
            "description": "There are many variations of passages of Lorem Ipsum available",
            "dueDate": new Date("2024-05-15T16:54:55.845"),
            "priority": 1
        }
    }
};
