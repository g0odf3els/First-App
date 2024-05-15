import type { Meta, StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { moduleMetadata } from '@storybook/angular';
import { BoardListComponent } from '../app/components/board-list/board-list.component';
import { BoardListItemComponent } from '../app/components/board-list-item/board-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { selectAllBoards } from '../app/store/board/board.selectors';

const initialState = {
    boards: {
        allBoards: [
            { id: '60623218-954a-479a-9f66-f1d3a2f9fc6b', name: 'Personal' },
            { id: '2a4ad540-cb9a-49d4-91fb-53c917cb0b71', name: 'Work' },
            { id: '3a413f96-58f5-45d5-95eb-fe7504551d89', name: 'Miscellaneous' }
        ],
    }
};

const meta: Meta<BoardListComponent> = {
    title: 'BoardListComponent',
    component: BoardListComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                BoardListItemComponent
            ],
            providers: [
                provideMockStore({
                    initialState,
                    selectors: [
                        { selector: selectAllBoards, value: initialState.boards.allBoards }
                    ]
                })
            ]
        })
    ],
    argTypes: {}
};

export default meta;
type Story = StoryObj<BoardListComponent>;


export const Default: Story = {
    args: {}
};
