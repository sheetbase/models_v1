import { Ids, Extras } from './_shared';

export interface Category extends Ids, Extras {
  // Ids

  title: string;

  description?: string;
  thumbnail?: string;
  image?: string;
  count?: number;
  only?: string;
  // Extras
}