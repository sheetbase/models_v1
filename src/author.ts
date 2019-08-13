import { Ids, Images, Taxonomies, Statistics, Extras } from './_shared';

export interface Author extends Ids, Images, Taxonomies, Statistics, Extras {
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
  type?: string;
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}