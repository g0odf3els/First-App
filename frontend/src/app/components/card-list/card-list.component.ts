import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { CardList } from '../../data/models/card-list';
import { CardListService } from '../../services/card-list.service';
import { MatDialog } from '@angular/material/dialog';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { CardService } from '../../services/card.service';
import { Priority } from '../../data/enums/priority';
import { CardComponent } from "../card/card.component";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  imports: [CommonModule, FormsModule, MatIconModule, MatMenuModule, MatButtonModule, CardComponent]
})
export class CardListComponent {

  private _cardList: CardList | null;

  public isFormVisible: boolean = false;
  public newCardList: CardList;

  constructor(public dialog: MatDialog, public cardListService: CardListService, public cardService: CardService) { }

  @Input()
  set cardList(cardList: CardList | null) {
    this._cardList = cardList;
    if (this._cardList) {
      this.newCardList = JSON.parse(JSON.stringify(this._cardList));
    }
  }

  get cardList(): CardList | null {
    return this._cardList;
  }

  updateCardList() {
    this.cardListService.updateCardList(this.newCardList);
  }

  deleteCardList() {
    if (this.cardList) {
      this.cardListService.deleteCardList(this.cardList);
    }
  }

  createCard() {
    const dialogRef = this.dialog.open(CardEditModalComponent, {
      data: {
        boardId: this._cardList?.boardId,
        listId: this._cardList?.id,
        name: "Card",
        dueDate: new Date(),
        priority: Priority.Medium
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.createCard(result).subscribe({
          next: () => {
            if (this.cardList) {
              this.cardListService.loadCardListsPaged(this.cardList.boardId, 1, 50);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    });
  }
}
