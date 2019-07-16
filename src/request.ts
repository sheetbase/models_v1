import { Ids, Extras } from './_shared';
import { OrderProduct, OrderAdjustment } from './order';

export interface Request extends Ids, Extras {
  // Ids

  item: OrderProduct;
  value: number;

  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;

  createdAt?: string;
  paymentType?: string;
  transactionId?: string;
  adjustments?: {
    [adjustment: string]: OrderAdjustment;
  };
  note?: string;

  // Extras
}