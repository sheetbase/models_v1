export interface Package {
  '#'?: number;
  $key?: string;

  title: string;
  sku: string;
  price: number;

  thumbnail?: string;
  description?: string;
  summary?: string | Array<{ text: string, included?: true, excluded?: true }>;
  content?: string;
}