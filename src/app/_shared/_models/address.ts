import { City } from './City';

export interface Address {
  id: number;
  name: string;
  addressNumber: number;
  street: string;
  streetAdd: string;
  city: City;
}
