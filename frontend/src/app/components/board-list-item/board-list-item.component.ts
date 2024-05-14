import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Board } from '../../data/models/board';

@Component({
  selector: 'app-board-list-item',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './board-list-item.component.html',
  styleUrl: './board-list-item.component.css'
})
export class BoardListItemComponent {
  @Input() board: Board;

  @Output() boardSelectedEvent = new EventEmitter<Board>();

  @Output() updateBoardEvent = new EventEmitter<Board>();

  @Output() deleteBoardEvent = new EventEmitter<Board>();

  onBoardClick(board: any) {
    this.boardSelectedEvent.emit(board);
  }

  onButtonClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
