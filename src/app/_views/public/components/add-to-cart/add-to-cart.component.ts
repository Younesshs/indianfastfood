// add-to-cart.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrUpdateOrderitemDialogComponent } from '../add-or-update-orderitem-dialog/add-or-update-orderitem-dialog.component';
import { ProductDisplay } from 'src/app/_shared/_models/ProductDisplay';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent {
  constructor(private dialog: MatDialog) {}

  @Input() product?: ProductDisplay;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrUpdateOrderitemDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
