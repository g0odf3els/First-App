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

@Component({
  selector: 'app-card-modal',
  standalone: true,
  imports: [CommonModule, MatIcon, FormsModule, MatSelectModule, PriorityPipe],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css'
})
export class CardModalComponent {

  constructor(
    public cardListService: CardListService,
    public cardService: CardService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card,
  ) { }

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
      error: (erorr) => {
        console.log(erorr);
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
