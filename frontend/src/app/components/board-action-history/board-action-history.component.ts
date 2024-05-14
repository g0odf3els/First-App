import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

import { ActionHistoryComponent } from "../action-history/action-history.component";
import { ActionLogService } from '../../services/action-log.service';
import { ActionLog } from '../../data/models/action-log';
import { Board } from '../../data/models/board';

@Component({
  selector: 'app-board-action-history',
  standalone: true,
  templateUrl: './board-action-history.component.html',
  styleUrl: './board-action-history.component.css',
  imports: [ActionHistoryComponent, CommonModule, MatIcon]
})
export class BoardActionHistoryComponent {

  constructor(public actionLogService: ActionLogService) { }

  @Input() board: Board | undefined | null;

  @Output() closeEvent = new EventEmitter<boolean>();

  actionLogs: ActionLog[] = [];

  currentPage: number = 1;
  isEndReached: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.actionLogs = [];
    this.currentPage = 1;
    this.isEndReached = false;
    this.loadActionLogs();
  }

  loadActionLogs() {
    if (this.board) {
      this.actionLogService.loadBoardActionLogPaged(this.board.id, this.currentPage, 20).subscribe({
        next: (data) => {
          if (data.length != 0) {
            this.actionLogs = this.actionLogs.concat(data);
            this.currentPage++;
          }
          else {
            this.isEndReached = true;
          }
        }
      });
    }
  }

  close() {
    this.closeEvent.emit();
  }
}