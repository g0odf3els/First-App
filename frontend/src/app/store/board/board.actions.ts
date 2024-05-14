import { createAction, props } from '@ngrx/store';
import { Board } from '../../data/models/board';

export const loadBoards = createAction('[Board List] Load Boards');
export const loadBoardsSuccess = createAction('[Board List] Load Boards Success', props<{ boards: Board[] }>());
export const loadBoardsFailure = createAction('[Board List] Load Boards Failure', props<{ error: any }>());

export const createBoard = createAction('[Board List] Create Board', props<{ board: Board }>());
export const createBoardSuccess = createAction('[Board List] Create Board Success', props<{ board: Board }>());
export const createBoardFailure = createAction('[Board List] Create Board Failure', props<{ error: any }>());

export const updateBoard = createAction('[Board List] Update Board', props<{ board: Board }>());
export const updateBoardSuccess = createAction('[Board List] Update Board Success', props<{ board: Board }>());
export const updateBoardFailure = createAction('[Board List] Update Board Failure', props<{ error: any }>());

export const deleteBoard = createAction('[Board List] Delete Board', props<{ boardId: string }>());
export const deleteBoardSuccess = createAction('[Board List] Delete Board Success', props<{ boardId: string }>());
export const deleteBoardFailure = createAction('[Board List] Delete Board Failure', props<{ error: any }>());

export const selectBoard = createAction('[Board List] Select Board', props<{ boardId: string }>());
