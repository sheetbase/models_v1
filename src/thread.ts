import { Ids, Extras } from './_shared';

export interface ThreadRating {
  count: number; // number of rating
  total: number; // number of stars
}

export interface Thread extends Ids, Extras {
  // Ids

  title?: string;
  content: string;

  createdAt?: string;
  parent?: string;
  master?: string;
  rating?: ThreadRating;
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;

  // Extras
}
