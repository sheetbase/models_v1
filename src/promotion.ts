export interface Promo {
  '#'?: number;
  $key: string;
  type: string;
  body: string;
  value: number;
  description?: string;
  expiry: string;
}