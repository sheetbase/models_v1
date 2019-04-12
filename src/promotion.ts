export interface Promotion {
  '#'?: number;
  $key?: string;

  type: string;
  body: string;
  value: number;
  expiry: string;

  description?: string;
  meta?: any;
}