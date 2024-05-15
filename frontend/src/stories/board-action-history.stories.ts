import { BoardActionHistoryComponent } from "../app/components/board-action-history/board-action-history.component";
import { moduleMetadata } from '@storybook/angular';
import { Meta, StoryObj } from "@storybook/angular";
import { ActionLogService } from "../app/services/action-log.service";
import { mockActionLogService } from "./mock-services/mockActionLogService";

const meta: Meta<BoardActionHistoryComponent> = {
    title: 'BoardActionHistoryComponent',
    component: BoardActionHistoryComponent,
    tags: ['autodocs'],
    argTypes: {
        board: { control: 'object' }
    },
    decorators: [
        moduleMetadata({
            providers: [
                { provide: ActionLogService, useClass: mockActionLogService },
            ]
        })
    ],
};

export default meta;
type Story = StoryObj<BoardActionHistoryComponent>;

export const Default: Story = {
    args: {
        board: {
            id: '05209b9c-53eb-4871-b3b2-6a49e797d73f',
            name: 'Board',
        }
    }
};