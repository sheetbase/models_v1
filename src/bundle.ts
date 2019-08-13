import { Ids, Authors, Images, Content, Taxonomies, Statistics, Extras } from './_shared';

export interface Bundle extends Ids, Authors, Images, Content, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  count?: number;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  type?: string;
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}
