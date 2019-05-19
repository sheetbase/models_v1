export interface Promotion {
  '#'?: number;
  $key?: string;

  title: string;
  type: string;
  value: number;
  body: string;
  expiry: string;

  meta?: any;
}