import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Card } from '../../data/models/card';
import { CardListService } from '../../services/card-list.service';

@Component({
  selector: 'app-card-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './card-edit-modal.component.html',
  styleUrl: './card-edit-modal.component.css'
})
export class CardEditModalComponent {

  constructor(
    public cardListService: CardListService,
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card,
  ) { }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
