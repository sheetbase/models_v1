import { Ids, Extras } from './_shared';

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
  value: number;
}

export interface OrderAdjustment {
  at: string;
  reason: string;
  value: number;
}

export interface Order extends Ids, Extras {
  // Ids
  createdAt?: string;
  items: {
    [key: string]: OrderItem;
  };
  status: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled' | 'archived';
  count?: number;
  total?: number;
  subtotal?: number;
  discountTotal?: number;
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
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