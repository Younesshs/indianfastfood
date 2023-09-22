import { ProductDisplay } from './ProductDisplay';

export interface Warehouse {
  id: number;
  name: string;
  products: ProductDisplay[];
}
