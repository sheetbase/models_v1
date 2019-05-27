import { Ids, Extras } from './_shared';

export interface Notification extends Ids, Extras {
  // Ids

  title: string;

  createdAt?: string;
  link?: string;
  thumbnail?: string;
  content?: string;
  expiry?: string;
  // Extras
}