import { Ids, Authors, Images, Taxonomies, Statistics, Extras } from './_shared';

export interface Bundle extends Ids, Authors, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  count?: number;
  createdAt?: string;
  // Images
  description?: string;
  content?: string;
  type?: string;
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}
