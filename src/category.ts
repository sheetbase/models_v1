import { Ids, Images, Extras } from './_shared';

export interface Category extends Ids, Images, Extras {
  // Ids
  title: string;
  // Images
  description?: string;
  count?: number;
  only?: string;
  // Extras
}