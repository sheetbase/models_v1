import {Ids, Images, Extras} from './_shared';

export interface Category extends Ids, Images, Extras {
  // Ids
  // Images
  description?: string;
  count?: number;
  only?: string;
  locale?: string;
  origin?: string;
  // Extras
}
