import { Ids, Extras } from './_shared';

export interface Thread extends Ids, Extras {
  // Ids

  title?: string;
  content: string;

  createdAt?: string;
  parent?: string;
  master?: string;

  uid?: string;
  email?: string;
  displayName?: string;

  // Extras
}
