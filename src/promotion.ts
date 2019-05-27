import { Ids, Extras } from './_shared';

export interface Promotion extends Ids, Extras {
  // Ids

  title: string;
  type: string;
  value: number;
  body: string;
  expiry: string;

  // Extras
}