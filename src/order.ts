import { UserProfile } from './user';

export interface OrderProduct {
  title: string;
  sku: string;
  price: number;

  slug?: string;
  unit?: string;
  thumbnail?: string;
}

export interface OrderItem {
  qty: number;
  timestamp: number;
  product: OrderProduct;
}

export interface OrderDiscount {
  type: string;
  value: number;
  identity: string;
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

  // UserProfile
  // uid
  // displayName
  // email
  // phoneNumber
  // address

  paymentType?: string;
  transactionId?: string;
  adjustments?: OrderAdjustment[];
  discountData?: {
    [by: string]: OrderDiscount;
  };
  note?: string;
  meta?: any;
}