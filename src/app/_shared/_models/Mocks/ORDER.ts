import { Order } from '../Order';
import { CustomerTest } from './CustomerTest';

export const ORDER: Order = {
  id: 1,
  orderItems: new Array(),
  state: 0,
  deliveryDate: new Date(),
  customer: CustomerTest,
};
