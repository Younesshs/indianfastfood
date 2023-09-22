import { Customer } from '../customer';
import { ADDRESS_TEST } from './ADDRESS_TEST';
import { ORDER } from './ORDER';
import { RESTAURANT_TEST } from './RESTAURANT';

export const CustomerTest: Customer = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: '',
  phone: '',
  fidelityPoints: 0,
  restaurant: RESTAURANT_TEST,
  Address: ADDRESS_TEST,
  orders: [ORDER],
};
