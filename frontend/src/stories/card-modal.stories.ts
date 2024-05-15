import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CardListService } from '../app/services/card-list.service';
import { mockCardListService } from './mock-services/mockCardListService';
import { CardModalComponent } from '../app/components/card-modal/card-modal.component';
import { ActionLogService } from '../app/services/action-log.service';
import { mockActionLogService } from './mock-services/mockActionLogService';
import { CardService } from '../app/services/card.service';
import { mockCardService } from './mock-services/mockCardService';

const meta: Meta<CardModalComponent> = {
    title: 'CardModalComponent',
    component: CardModalComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [FormsModule, MatDialogModule, MatIconModule],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: CardListService, useClass: mockCardListService },
                { provide: CardService, useClass: mockCardService },
                { provide: ActionLogService, useClass: mockActionLogService },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ]
        })
    ],
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<CardModalComponent>;

export const Default: Story = {
    args: {
        data: {
            "id": "bd96bfdb-6799-4f95-b243-8963f66cb22b",
            "boardId": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
            "listId": "afd2a0aa-a451-4472-93b1-9e1575d4c39b",
            "name": "Card",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "dueDate": new Date("2024-05-17T21:00:00"),
            "priority": 0
        },
    }
};
