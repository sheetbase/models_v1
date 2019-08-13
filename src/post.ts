import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Post
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Statistics, Extras {
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
  // Parents
  // Relationships
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}