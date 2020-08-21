import {Ids, Extras} from './_shared';

export interface Promotion extends Ids, Extras {
  // Ids
  content?: string;
  value?: number;
  kind?: string;
  locale?: string;
  origin?: string;
  // Extras
}
