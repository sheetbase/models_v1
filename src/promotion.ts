import { Ids, Extras } from './_shared';

export interface Promotion extends Ids, Extras {
  // Ids
  title: string;
  type?: string;
  content?: string;
  value: number;
  locale?: string;
  origin?: string;
  // Extras
}