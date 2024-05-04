import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import {
  CdkDropListGroup
} from '@angular/cdk/drag-drop';

import { ActionLogService } from '../../services/actionLog.service';
import { CardService } from '../../services/card.service';
import { ActionHistoryComponent } from "../action-history/action-history.component";
import { CardListComponent } from "../card-list/card-list.component";
import { EditCardFormComponent } from "../edit-card-modal/edit-card-modal.component";
import { CardModalComponent } from "../card-modal/card-modal.component";
import { HistorySidebarComponent } from "../history-sidebar/history-sidebar.component";

@Component({
  selector: 'card-board',
  standalone: true,
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    CdkDropListGroup,
    CardListComponent,
    EditCardFormComponent,
    CardModalComponent,
    ActionHistoryComponent,
    HistorySidebarComponent
  ]
})
export class CardBoardComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  isSidebarVisible: boolean = false;
  isNewListFormVisible: boolean = false;
  newListName: string = "New list"

  private unsubscribe$ = new Subject<void>();

  constructor(
    public cardService: CardService,
    public actionLogService: ActionLogService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.actionLogService.loadActionLogPaged(1, 50);

    this.cardService.loadCardListsPaged(1, 160);
    this.cardService.cardListsUpdated$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.cardService.loadCardListsPaged(1, 1000);
      });

    this.cardService.error
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((error) => {
        this.openSnackBar("Error");
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
