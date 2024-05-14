import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from './services/board.service';
import { BoardListComponent } from "./components/board-list/board-list.component";
import { BoardComponent } from "./components/board/board.component";
import { Board } from './data/models/board';
import { BoardEditModalComponent } from './components/board-edit-modal/board-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, BoardListComponent, BoardComponent]
})
export class AppComponent {

  constructor(public dialog: MatDialog, public boardService: BoardService) { }

  isBoardListVisible = true;

  ngOnInit() {
    this.boardService.loadBoardsPaged(1, 50);
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
}
