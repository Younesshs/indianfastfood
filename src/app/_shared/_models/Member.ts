import { Restaurant } from './Restaurant';
import { Role } from './Role';
import { Address } from './address';

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  restaurant: Restaurant;
  address: Address;
  roles: Role[];
}
