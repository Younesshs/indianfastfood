import { NumberValueAccessor } from "@angular/forms";

export interface Facture {
    orderItem_name: string;
    orderItem_price: number;
    orderItem_quantity: number;
    total_price: number;
}