import { Address } from 'src/app/_shared/_models/address';
import { Order } from './Order';
import { Restaurant } from 'src/app/_shared/_models/Restaurant';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  fidelityPoints: number;
  restaurant: Restaurant;
  Address: Address;
  orders: Order[];
}
