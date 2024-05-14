import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Board } from '../../data/models/board';

export interface BoardState extends EntityState<Board> {
    selectedBoardId: string | null;
    loading: boolean;
}

export const adapter: EntityAdapter<Board> = createEntityAdapter<Board>();

export const initialState: BoardState = adapter.getInitialState({
    selectedBoardId: null,
    loading: false,
});