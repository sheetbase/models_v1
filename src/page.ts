import { Ids, Extras } from './_shared';

export interface Page extends Ids, Extras {
  // Ids

  title: string;

  image?: string;
  contentSource?: string;
  content?: string;
  locale?: string;
  origin?: string;
  // Extras
}