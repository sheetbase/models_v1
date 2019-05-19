import { UserProfile } from './user';

export interface OrderProduct {
  key: string;
  title: string;
  sku: string;
  price: number;

  unit?: string;
  thumbnail?: string;
}

export interface OrderItem {
  qty: number;
  timestamp: number;
  product: OrderProduct;
}

export interface OrderDiscount {
  title: string;
  value: number;
}

export interface OrderAdjustment {
  reason: string;
  date: string;
  value: number;
}

export interface Order extends UserProfile {
  '#'?: number;
  $key?: string;

  status: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled' | 'archived';
  items: {
    [key: string]: OrderItem;
  };

  createdAt?: string;
  count?: number;
  total?: number;
  subtotal?: number;
  discountTotal?: number;

  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
  address?: string;

  paymentType?: string;
  transactionId?: string;
  adjustments?: OrderAdjustment[];
  discountData?: {
    [type: string]: OrderDiscount;
  };
  note?: string;
  meta?: any;
}