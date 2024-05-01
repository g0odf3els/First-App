import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Subscription } from 'rxjs';

import { Card } from '../../data/models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'edit-card-modal',
  standalone: true,
  providers: [
    MatDatepickerModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './edit-card-modal.component.html',
  styleUrl: './edit-card-modal.component.css',
})
export class EditCardFormComponent {
  card: Card;
  display: boolean = false;
  cardCreateSubscription: Subscription;

  constructor(public cardService: CardService) { }

  ngOnInit() {
    this.cardCreateSubscription = this.cardService.cardCreated$.subscribe(
      (newCard) => {
        this.card = newCard;
        console.log(this.card.listId)
        this.display = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.cardCreateSubscription) {
      this.cardCreateSubscription.unsubscribe();
    }
  }

  createUpdateCard() {
    if (this.card.id) {
      this.cardService.updateCard(this.card);
    }
    else {
      this.cardService.createCard(this.card);
    }
    this.display = false;
  }
}