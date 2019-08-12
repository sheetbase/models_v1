import { Ids, Images, Statistics, Extras } from './_shared';

export interface Author extends Ids, Images, Statistics, Extras {
  // Ids

  title: string;

  description?: string;
  // Images
  email?: string;
  phoneNumber?: string;
  url?: string;
  stats?: {
    [prop: string]: any;
  };
  // Statistics
  // Extras
}