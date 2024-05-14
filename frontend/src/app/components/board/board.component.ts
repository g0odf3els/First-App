import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { CardListComponent } from "../card-list/card-list.component";
import { BoardService } from '../../services/board.service';
import { CardListService } from '../../services/card-list.service';
import { Board } from '../../data/models/board';
import { CardList } from '../../data/models/card-list';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  imports: [CommonModule, MatIconModule, FormsModule, CardListComponent]
})
export class BoardComponent {

  isNewListFormVisible: boolean = false;
  newList: CardList;

  private _board: Board | null;

  constructor(public cardListService: CardListService, public boardService: BoardService) { }

  @Output() changeBoardEvent = new EventEmitter<void>;

  @Input()
  set board(board: Board | null) {

    this._board = board;

    if (this._board) {
      this.cardListService.loadCardListsPaged(this._board.id, 1, 25);
      this.newList = { id: '', boardId: this._board.id, name: 'New List', items: [] }
    }

  }

  get board(): Board | null {
    return this._board;
  }

  createCardList() {
    if (this.newList) {
      this.cardListService.createCardList(this.newList);
      this.newList.name = 'New List';
      this.isNewListFormVisible = false;
    }
  }

  changeBoard() {
    this.changeBoardEvent.emit();
  }
}
