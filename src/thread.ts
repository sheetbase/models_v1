import { Ids, Status, Statistics, Extras } from './_shared';

export interface Thread extends Ids, Status, Statistics, Extras {
  // Ids
  type?: string;
  // Status
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
