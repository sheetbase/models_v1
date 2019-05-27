import { Ids, Extras } from './_shared';

export interface Package extends Ids, Extras {
  // Ids

  title: string;
  sku: string;
  price: number;

  thumbnail?: string;
  description?: string;
  summary?: string | Array<{ text: string, included?: true, excluded?: true }>;
  content?: string;
  locale?: string;
  origin?: string;
  // Extras
}