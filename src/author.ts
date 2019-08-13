import { Ids, Images, Content, Taxonomies, Statistics, Extras } from './_shared';

export interface Author extends Ids, Images, Content, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  // Images
  description?: string;
  // Content
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