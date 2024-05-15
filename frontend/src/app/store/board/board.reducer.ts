import { createReducer, on } from '@ngrx/store';
import { adapter, initialState } from './board.state';
import * as BoardActions from './board.actions';

export const boardReducer = createReducer(
    initialState,
    on(BoardActions.loadBoards, state => ({ ...state, loading: true })),
    on(BoardActions.loadBoardsSuccess, (state, { boards }) => adapter.setAll(boards, { ...state, loading: false })),
    on(BoardActions.loadBoardsFailure, state => ({ ...state, loading: false })),

    on(BoardActions.createBoardSuccess, (state, { board }) => adapter.addOne(board, state)),
    on(BoardActions.updateBoardSuccess, (state, { board }) => adapter.updateOne({ id: board.id, changes: board }, state)),
    on(BoardActions.deleteBoardSuccess, (state, { boardId }) => adapter.removeOne(boardId, state)),

    on(BoardActions.selectBoard, (state, { boardId }) => ({ ...state, selectedBoardId: boardId }))
);

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();