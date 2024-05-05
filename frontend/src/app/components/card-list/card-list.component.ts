import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { CardList } from '../../data/models/card-list';
import { CardService } from '../../services/card.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    CardComponent
  ]
})
export class CardListComponent {
  isFormVisible: boolean = false;
  newListName: string;

  @Input() cardList: CardList;

  constructor(public cardService: CardService) { }

  ngOnInit() {
    if (this.cardList && this.cardList.items) {
      this.cardList.items.sort((a, b) => {
        if (a.dueDate < b.dueDate) return -1;
        if (a.dueDate > b.dueDate) return 1;
        return 0;
      });
    }
  }

  ngOnChanges() {
    if (this.cardList) {
      this.newListName = this.cardList.name;
    }
  }

  updateList() {
    this.cardService.updateCardList(this.cardList.id, this.newListName);
    this.isFormVisible = false;
  }

  drop(event: CdkDragDrop<CardList>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data.items, event.previousIndex, event.currentIndex);
    } else {
      event.previousContainer.data.items[event.previousIndex].listId = event.container.data.id;
      this.cardService.updateCard(event.previousContainer.data.items[event.previousIndex]);
      transferArrayItem(
        event.previousContainer.data.items,
        event.container.data.items,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
