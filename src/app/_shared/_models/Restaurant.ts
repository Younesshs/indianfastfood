import { Order } from './Order';
import { Member } from './Member';
import { Warehouse } from './Warehouse';
import { Address } from './address';

export interface Restaurant {
  id: number;
  name: string;
  orders: Order[];
  address: Address;
  members: Member[];
  warehouse: Warehouse;
}
