export interface RequestItem {
  title: string;
  sku: string;
  price: number;
}

export interface RequestAdjustment {
  reason: string;
  at: string;
  value: number;
}

export interface Request {
  '#'?: number;
  $key?: string;

  email: string;

  createdAt?: string;
  name?: string;
  tel?: string;
  value?: number;
  adjustments?: RequestAdjustment[];
  paymentType?: string;
  transactionId?: string;
  item?: RequestItem;
  note?: string;
  meta?: any;
}