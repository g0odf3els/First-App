import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

import { ActionHistoryComponent } from "../action-history/action-history.component";
import { ActionLogService } from '../../services/actionLog.service';
import { ActionLog } from '../../data/models/action-log';

@Component({
  selector: 'history-sidebar',
  standalone: true,
  templateUrl: './history-sidebar.component.html',
  styleUrl: './history-sidebar.component.css',
  imports: [ActionHistoryComponent, CommonModule, MatIcon]
})
export class HistorySidebarComponent {

  constructor(public actionLogService: ActionLogService) { }

  @Input() open: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  actionLogs: ActionLog[] = [];

  currentPage: number = 1;
  isEndReached: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.open) {
      this.actionLogs = [];
      this.currentPage = 1;
      this.isEndReached = false;
      this.loadActionLogs();
    }
  }
  ngOnInit() {
    this.loadActionLogs();
  }

  loadActionLogs() {
    this.actionLogService.loadActionLogPaged(this.currentPage, 20).subscribe({
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
