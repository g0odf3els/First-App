import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardState, adapter } from './board.state';

export const selectBoardState = createFeatureSelector<BoardState>('boardState');

const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

export const selectAllBoards = createSelector(selectBoardState, selectAll);
export const selectBoardEntities = createSelector(selectBoardState, selectEntities);
export const selectBoardIds = createSelector(selectBoardState, selectIds);
export const selectBoardTotal = createSelector(selectBoardState, selectTotal);

export const selectSelectedBoardId = createSelector(selectBoardState, state => state.selectedBoardId);
export const selectSelectedBoard = createSelector(
    selectBoardEntities,
    selectSelectedBoardId,
    (entities, selectedId) => selectedId ? entities[selectedId] : null
);

export const selectLoading = createSelector(selectBoardState, state => state.loading);
