import { Component } from '@angular/core';
import { Facture } from 'src/app/facture';
import { FACTURES } from 'src/app/mock_factures';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent {
  today: number = Date.now();

  factures = FACTURES;
}
