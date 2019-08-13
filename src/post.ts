import { Ids, Authors, Images, Content, Taxonomies, Statistics, Extras } from './_shared';

export interface Post extends Ids, Authors, Images, Content, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  createdAt?: string;
  updatedAt?: string;
  // Authors
  // Images
  duration?: number;
  excerpt?: string;
  // Content
  parents?: {
    [$key: string]: any;
  };
  type?: string;
  status?: 'draft' | 'published' | 'archived';
  locale?: string;
  origin?: string;
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}