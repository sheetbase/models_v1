import { Ids, Extras } from './_shared';
import { OrderAdjustment } from './order';

export interface RequestItem {
  title: string;
  sku: string;
  price: number;
}

export interface Request extends Ids, Extras {
  // Ids

  item: RequestItem;
  value: number;

  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;

  createdAt?: string;
  paymentType?: string;
  transactionId?: string;
  adjustments?: OrderAdjustment[];
  note?: string;

  // Extras
}