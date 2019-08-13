import { Ids, Content, Extras } from './_shared';

export interface Page extends Ids, Content, Extras {
  // Ids

  title: string;

  image?: string;
  // Content
  locale?: string;
  origin?: string;
  // Extras
}