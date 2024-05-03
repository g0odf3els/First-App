import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Card } from '../../data/models/card';
import { PriorityFormatPipe } from "../../pipes/priority-format.pipe";
import { ActionLog } from '../../data/models/action-log';
import { ActionLogService } from '../../services/actionLog.service';
import { ActionHistoryComponent } from "../action-history/action-history.component";

@Component({
  selector: 'card-modal',
  standalone: true,
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.css',
  imports: [CommonModule, MatIconModule, FormsModule, MatSelectModule, PriorityFormatPipe, ActionHistoryComponent]
})
export class CardModalComponent {
  card: Card;
  actionLog: ActionLog[];
  display: boolean = false;
  cardShowSubscription: Subscription;

  constructor(public cardService: CardService, public actionLogService: ActionLogService) { }

  ngOnInit() {
    this.cardShowSubscription = this.cardService.cardSelected$.subscribe(
      (newCard) => {
        this.card = newCard;
        this.display = true;

        this.actionLogService.loadCardActionLogPaged(this.card.id, 1, 50).subscribe({
          next: (data) => {
            this.actionLog = data;
          }
        })
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
