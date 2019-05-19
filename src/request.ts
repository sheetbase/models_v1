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

  item: RequestItem;

  email?: string;
  name?: string;
  tel?: string;

  createdAt?: string;
  value?: number;

  paymentType?: string;
  transactionId?: string;
  adjustments?: RequestAdjustment[];
  note?: string;
  meta?: any;
}