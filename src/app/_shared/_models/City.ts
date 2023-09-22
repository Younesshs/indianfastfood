import { Country } from './Country';

export interface City {
  id: number;
  name: string;
  zipCode: number;
  country: Country;
}
