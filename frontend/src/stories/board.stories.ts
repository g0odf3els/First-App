import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from '../app/components/board/board.component';
import { CardListService } from '../app/services/card-list.service';
import { CardService } from '../app/services/card.service';
import { BoardService } from '../app/services/board.service';
import { mockCardListService } from './mock-services/mockCardListService';
import { mockCardService } from './mock-services/mockCardService';
import { mockBoardService } from './mock-services/mockBoardService';

const meta: Meta<BoardComponent> = {
    title: 'BoardComponent',
    component: BoardComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule],
            providers: [
                { provide: CardListService, useClass: mockCardListService },
                { provide: CardService, useClass: mockCardService },
                { provide: BoardService, useClass: mockBoardService }
            ],
        }),
    ],
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<BoardComponent>;


export const Default: Story = {
    args: {
        board: {
            "id": "699f07c4-5243-4cae-a963-4f74a181cf79",
            "name": "Personal"
        }
    }
};
