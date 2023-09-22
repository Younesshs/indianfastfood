import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-or-update-orderitem-dialog',
  templateUrl: './add-or-update-orderitem-dialog.component.html',
  styleUrls: ['./add-or-update-orderitem-dialog.component.scss'],
})
export class AddOrUpdateOrderitemDialogComponent {
  quantity: number = 1;
  comment: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddOrUpdateOrderitemDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  addToCart(): void {
    this.dialogRef.close({
      quantity: this.quantity,
      comment: this.comment,
    });
  }
}
