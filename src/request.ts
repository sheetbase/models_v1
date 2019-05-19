import { OrderAdjustment } from './order';

export interface RequestItem {
  title: string;
  sku: string;
  price: number;
}

export interface Request {
  '#'?: number;
  $key?: string;

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
  meta?: any;
}