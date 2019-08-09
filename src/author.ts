import { Ids, Images, Extras } from './_shared';

export interface Author extends Ids, Images, Extras {
  // Ids

  title: string;

  description?: string;
  // Images
  email?: string;
  url?: string;
  // Extras
}