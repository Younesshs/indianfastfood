// add-to-cart.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrUpdateOrderitemDialogComponent } from '../add-or-update-orderitem-dialog/add-or-update-orderitem-dialog.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrUpdateOrderitemDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
