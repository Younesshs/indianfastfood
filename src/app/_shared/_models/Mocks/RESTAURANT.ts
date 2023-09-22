import { Restaurant } from '../Restaurant';
import { ADDRESS_TEST } from './ADDRESS_TEST';
import { MEMBERS } from './MEMBERS';
import { ORDER } from './ORDER';
import { WAREHOUSE_TEST } from './WAREHOUSE_TEST';

export const RESTAURANT_TEST: Restaurant = {
  id: 1,
  name: 'Test Restaurant',
  orders: [ORDER],
  address: ADDRESS_TEST,
  members: MEMBERS,
  warehouse: WAREHOUSE_TEST,
};
