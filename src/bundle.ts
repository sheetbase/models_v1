import { Ids, Authors, Images, Taxonomies, Statistics, Extras } from './_shared';

export interface Bundle extends Ids, Authors, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  count?: number;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  contentSource?: string;
  content?: string;
  type?: string;
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}
