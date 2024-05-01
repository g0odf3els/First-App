import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Card } from '../../data/models/card';
import { PriorityFormatPipe } from "../../pipes/priority-format.pipe";

@Component({
  selector: 'card-modal',
  standalone: true,
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css',
  imports: [CommonModule, MatIconModule, FormsModule, MatSelectModule, PriorityFormatPipe]
})
export class CardModalComponent {
  card: Card;
  display: boolean = false;
  cardShowSubscription: Subscription;

  constructor(public cardService: CardService) { }

  ngOnInit() {
    this.cardShowSubscription = this.cardService.cardSelected$.subscribe(
      (newCard) => {
        this.card = newCard;
        this.display = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.cardShowSubscription) {
      this.cardShowSubscription.unsubscribe();
    }
  }

  editCard() {
    this.display = false;
    this.cardService.openEditCardModal(this.card);
  }

  onListChange(event: MatSelectChange) {
    this.cardService.updateCard(this.card);
  }
}
