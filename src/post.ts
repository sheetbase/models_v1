import { Ids, Authors, Images, Content, Taxonomies, Statistics, Extras } from './_shared';

export interface Post extends Ids, Authors, Images, Content, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  createdAt?: string;
  updatedAt?: string;
  // Authors
  // Images
  excerpt?: string;
  // Content
  duration?: number;
  type?: string;
  status?: 'draft' | 'published' | 'archived';
  locale?: string;
  origin?: string;
  parents?: {
    [$key: string]: any;
  };
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}