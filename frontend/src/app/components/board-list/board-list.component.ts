import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardEditModalComponent } from '../board-edit-modal/board-edit-modal.component';
import { Board } from '../../data/models/board';
import * as BoardActions from '../../store/board/board.actions';
import { selectAllBoards, selectLoading, selectSelectedBoard } from '../../store/board/board.selectors';
import { BoardListItemComponent } from "../board-list-item/board-list-item.component";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatIcon, MatProgressSpinnerModule, BoardListItemComponent]
})
export class BoardListComponent {

  @Output() hideEvent = new EventEmitter<void>();

  boards$: Observable<Board[]> = this.store.select(selectAllBoards);
  selectedBoard$ = this.store.select(selectSelectedBoard);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(BoardActions.loadBoards());
  }

  selectBoard(board: Board) {
    this.store.dispatch(BoardActions.selectBoard({ boardId: board.id }));
    this.hideEvent.emit();
  }

  createBoard(): void {
    const dialogRef = this.dialog.open(BoardEditModalComponent, {
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(BoardActions.createBoard({ board: result }));
      }
    });
  }

  updateBoard(board: Board): void {
    const dialogRef = this.dialog.open(BoardEditModalComponent, {
      data: { ...board }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(BoardActions.updateBoard({ board: result }));
      }
    });
  }

  deleteBoard(board: Board): void {
    this.store.dispatch(BoardActions.deleteBoard({ boardId: board.id }));
  }

  hide() {
    this.hideEvent.emit();
  }
}
