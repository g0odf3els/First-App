import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CardListService } from '../../services/card-list.service';
import { Card } from '../../data/models/card';
import { CardService } from '../../services/card.service';

import { PriorityPipe } from '../../pipes/priority.pipe';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { ActionLogService } from '../../services/action-log.service';
import { ActionLog } from '../../data/models/action-log';
import { ActionHistoryComponent } from "../action-history/action-history.component";

@Component({
  selector: 'app-card-modal',
  standalone: true,
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css',
  imports: [CommonModule, MatIcon, FormsModule, MatSelectModule, PriorityPipe, ActionHistoryComponent]
})
export class CardModalComponent {

  public actionLogs: ActionLog[];

  private _data: Card;

  constructor(
    public cardListService: CardListService,
    public cardService: CardService,
    public actionLogService: ActionLogService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: Card,
  ) {
    this.data = initialData;
  }

  get data(): Card {
    return this._data;
  }

  set data(value: Card) {
    this._data = value;
    if (this._data) {
      this.actionLogService.loadCardActionLogPaged(this._data.id, 1, 150)
        .subscribe({
          next: (data) => {
            this.actionLogs = data;
          },
          error: (error) => {
            console.log(error);
          }
        })
    }
  }

  editCard() {
    const dialogRef = this.dialog.open(CardEditModalComponent, {
      data: Object.assign({}, this.data)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.updateCard(result).subscribe({
          next: () => {
            this.data = result;
            this.cardListService.loadCardListsPaged(this.data.boardId, 1, 50);
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    });
  }

  onListChange(event: MatSelectChange) {
    this.cardService.updateCard(this.data).subscribe({
      next: () => {
        this.cardListService.loadCardListsPaged(this.data.boardId, 1, 50);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
