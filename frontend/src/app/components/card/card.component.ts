import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { PriorityPipe } from '../../pipes/priority.pipe';

import { Card } from '../../data/models/card';
import { CardService } from '../../services/card.service';
import { CardListService } from '../../services/card-list.service';
import { MatDialog } from '@angular/material/dialog';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    PriorityPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Card;

  constructor(
    public dialog: MatDialog,
    public cardService: CardService,
    public cardListService: CardListService) { }

  openCard() {
    this.dialog.open(CardModalComponent,
      {
        data: Object.assign({}, this.card)
      }
    );
  }

  editCard() {
    const dialogRef = this.dialog.open(CardEditModalComponent, {
      data: Object.assign({}, this.card)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.updateCard(result).subscribe({
          next: (data) => {
            this.cardListService.loadCardListsPaged(this.card.boardId, 1, 50);
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    });
  }

  deleteCard() {
    this.cardService.deleteCard(this.card).subscribe({
      next: () => {
        this.cardListService.loadCardListsPaged(this.card.boardId, 1, 50);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onListChange(event: MatSelectChange) {
    this.cardService.updateCard(this.card).subscribe({
      next: () => {
        this.cardListService.loadCardListsPaged(this.card.boardId, 1, 50);
      },
      error: (erorr) => {
        console.log(erorr);
      }
    })
  }

  getPriorityCssClass(): string {
    if (this.card && this.card.priority === 0) {
      return 'priority-low';
    } else if (this.card && this.card.priority === 1) {
      return 'priority-medium';
    } else if (this.card && this.card.priority === 2) {
      return 'priority-high';
    } else {
      return '';
    }
  }
}
