import { ProductDisplay } from './ProductDisplay';

export interface OrderItem {
  id: number;
  product: ProductDisplay;
  quantity: number;
  comment: string;
}
