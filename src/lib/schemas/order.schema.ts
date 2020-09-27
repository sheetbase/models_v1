import {Ids, Status, Extras} from '../types';

export interface OrderProduct {
  _id: string;
  title: string;
  sku: string;
  price: number;
  unit?: string;
  thumbnail?: string;
}

export interface OrderItem {
  at: string;
  qty: number;
  product: OrderProduct;
}

export interface OrderDiscount {
  title: string;
  value: number; // positive only
}

export interface OrderAdjustment {
  at: string;
  reason: string;
  value: number; // positive or nagative
}

export interface Order extends Ids, Status, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  stage?: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled';
  items: {
    [key: string]: OrderItem;
  };
  count?: number;
  total?: number;
  subtotal?: number;
  discountTotal?: number;
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: number | string;
  address?: string;
  note?: string;
  paymentType?: string;
  transactionId?: string;
  discountData?: {
    [type: string]: OrderDiscount;
  };
  adjustments?: {
    [adjustment: string]: OrderAdjustment;
  };
  // Extras
}
