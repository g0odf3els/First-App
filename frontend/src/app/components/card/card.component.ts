import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { PriorityFormatPipe } from '../../pipes/priority-format.pipe';

import { CardService } from '../../services/card.service';
import { Card } from '../../data/models/card';

@Component({
  selector: 'card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    PriorityFormatPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Card;

  constructor(public cardService: CardService) { }

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

  onListChange(event: MatSelectChange) {
    this.cardService.updateCard(this.card);
  }
}
