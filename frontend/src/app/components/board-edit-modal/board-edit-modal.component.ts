// board-edit-modal.component.ts
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Board } from '../../data/models/board';

@Component({
  selector: 'app-board-edit-modal',
  templateUrl: './board-edit-modal.component.html',
  styleUrls: ['./board-edit-modal.component.css'],
  standalone: true,
  imports: [FormsModule, MatIcon]
})
export class BoardEditModalComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Board,
  ) { }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
