import { Ids, Extras } from './_shared';

export interface Thread extends Ids, Extras {
  // Ids

  content: string;

  createdAt?: string;
  parent?: string;
  master?: string;

  uid?: string;
  email?: string;
  displayName?: string;

  // Extras
}
