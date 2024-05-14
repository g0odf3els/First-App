import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from "./components/board-list/board-list.component";
import { BoardComponent } from "./components/board/board.component";
import { MatDialog } from '@angular/material/dialog';
import { BoardActionHistoryComponent } from "./components/board-action-history/board-action-history.component";
import * as BoardActions from './store/board/board.actions'
import { selectSelectedBoard } from './store/board/board.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, BoardListComponent, BoardComponent, BoardActionHistoryComponent]
})
export class AppComponent {

  selectedBoard$ = this.store.select(selectSelectedBoard);


  constructor(public dialog: MatDialog, private store: Store) { }

  isBoardListVisible = true;
  isBoardHistoryVisible = false;

  ngOnInit() {
    this.store.dispatch(BoardActions.loadBoards());
  }
}
