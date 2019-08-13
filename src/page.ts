import { Ids, Images, Content, Extras } from './_shared';

export interface Page extends Ids, Images, Content, Extras {
  // Ids

  title: string;

  // Images
  excerpt?: string;
  // Content
  locale?: string;
  origin?: string;
  // Extras
}