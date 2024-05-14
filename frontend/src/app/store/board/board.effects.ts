import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as BoardActions from './board.actions';
import { BoardService } from '../../services/board.service';

@Injectable()
export class BoardEffects {

    constructor(private actions$: Actions, private boardService: BoardService) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BoardActions.loadBoards),
            mergeMap(() =>
                this.boardService.loadBoards().pipe(
                    map(boards => BoardActions.loadBoardsSuccess({ boards })),
                    catchError(error => of(BoardActions.loadBoardsFailure({ error })))
                )
            )
        )
    );

    createBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BoardActions.createBoard),
            mergeMap(action =>
                this.boardService.createBoard(action.board).pipe(
                    map(board => BoardActions.createBoardSuccess({ board })),
                    catchError(error => of(BoardActions.createBoardFailure({ error })))
                )
            )
        )
    );

    updateBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BoardActions.updateBoard),
            mergeMap(action =>
                this.boardService.updateBoard(action.board).pipe(
                    map(() => BoardActions.updateBoardSuccess({ board: action.board })),
                    catchError(error => of(BoardActions.updateBoardFailure({ error })))
                )
            )
        )
    );

    deleteBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BoardActions.deleteBoard),
            mergeMap(action =>
                this.boardService.deleteBoard(action.boardId).pipe(
                    map(() => BoardActions.deleteBoardSuccess({ boardId: action.boardId })),
                    catchError(error => of(BoardActions.deleteBoardFailure({ error })))
                )
            )
        )
    );
}
