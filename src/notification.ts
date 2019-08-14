import { Ids, Extras } from './_shared';

export interface Notification extends Ids, Extras {
  // Ids
  thumbnail?: string;
  content?: string;
  link?: string;
  locale?: string;
  origin?: string;
  // Extras
}