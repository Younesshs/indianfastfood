import { Customer } from './customer';
import { OrderItem } from './OrdeItem';

export interface Order {
  id: number;
  orderItems: OrderItem[];
  deliveryDate: Date;
  state: number;
  customer: Customer;
}
