import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { BoardEditModalComponent } from '../board-edit-modal/board-edit-modal.component';
import { BoardListItemComponent } from "../board-list-item/board-list-item.component";
import { BoardService } from '../../services/board.service';
import { Board } from '../../data/models/board';

@Component({
  selector: 'app-board-list',
  standalone: true,
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css',
  imports: [CommonModule, MatIcon, BoardListItemComponent]
})
export class BoardListComponent {

  constructor(public dialog: MatDialog, public boardService: BoardService) { }

  @Output() hideEvent = new EventEmitter<void>();

  ngOnInit() {
    this.boardService.loadBoardsPaged(1, 50);
  }

  selectBoard(board: Board) {
    this.boardService.selectedBoardSubject.next(board);
    this.hideEvent.emit();
  }

  createBoard(): void {
    const dialogRef = this.dialog.open(BoardEditModalComponent,
      {
        data: { name: "" }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardService.createBoard(result);
      }
    });
  }

  updateBoard(board: Board): void {
    const dialogRef = this.dialog.open(BoardEditModalComponent,
      {
        data: JSON.parse(JSON.stringify(board))
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardService.updateBoard(result);
      }
    });
  }

  deleteBoard(board: Board): void {
    this.boardService.deleteBoard(board);
  }

  hide() {
    this.hideEvent.emit();
  }
}