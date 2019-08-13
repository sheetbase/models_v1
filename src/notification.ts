import { Ids, Extras } from './_shared';

export interface Notification extends Ids, Extras {
  // Ids

  title: string;
  link: string;

  thumbnail?: string;
  content?: string;
  // Extras
}