import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { BoardEditModalComponent } from '../app/components/board-edit-modal/board-edit-modal.component';

const meta: Meta<BoardEditModalComponent> = {
    title: 'BoardEditModalComponent',
    component: BoardEditModalComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [FormsModule, MatDialogModule, MatIconModule],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        })
    ],
    argTypes: {}
};

export default meta;
type Story = StoryObj<BoardEditModalComponent>;

export const Default: Story = {
    args: {
        data: {
            id: '986c8cdf-f0ee-4e28-878a-46ee5f28ca46',
            name: 'Sample Board'
        }
    }
};
