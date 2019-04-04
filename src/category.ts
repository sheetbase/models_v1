export interface Category {
  '#'?: number;
  $key?: string;

  title: string;

  description?: string;
  thumbnail?: string;
  count?: number;
  only?: string;
}