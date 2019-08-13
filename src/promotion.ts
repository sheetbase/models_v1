import { Ids, Extras } from './_shared';

export interface Promotion extends Ids, Extras {
  // Ids

  title: string;
  value: number;

  type?: string;
  content?: string;

  // Extras
}