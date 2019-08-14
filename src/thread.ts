import { Ids, Statistics, Extras } from './_shared';

export interface Thread extends Ids, Statistics, Extras {
  // Ids
  title?: string;
  type?: string;
  status?: string;
  createdAt?: string;
  content: string;
  parent?: string;
  master?: string; // <sheet>:<key> (posts:post-1)
  stars?: number; // with rating stars
  uid?: string;
  email?: string;
  displayName?: string;
  phoneNumber?: number | string;
  // Statistics
  // Extras
}
