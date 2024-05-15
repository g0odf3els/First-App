import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BoardListItemComponent } from '../app/components/board-list-item/board-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<BoardListItemComponent> = {
    title: 'BoardListItemComponent',
    component: BoardListItemComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule]
        }),
    ],
    tags: ['autodocs'],
    argTypes: {
        board: { control: 'object' }
    }
};

export default meta;
type Story = StoryObj<BoardListItemComponent>;

export const Default: Story = {
    args: {
        board: {
            id: '05209b9c-53eb-4871-b3b2-6a49e797d73f',
            name: 'Board',
        }
    },
};

export const LongName: Story = {
    args: {
        board: {
            id: '05209b9c-53eb-4871-b3b2-6a49e797d73f',
            name: 'This is a very long board name to test the UI handling of long text',
        }
    },
};

export const NoName: Story = {
    args: {
        board: {
            id: '05209b9c-53eb-4871-b3b2-6a49e797d73f',
            name: '',
        }
    },
};