import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Rating, Statistics, Extras,
} from './_shared';

export interface Post
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Rating, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  status?: 'draft' | 'archived' | 'published';
  createdAt?: string;
  updatedAt?: string;
  // Authors
  // Images
  excerpt?: string;
  // Content
  duration?: number;
  locale?: string;
  origin?: string;
  // Parents
  // Relationships
  // Taxonomies
  // Rating
  // Statistics
  keywords?: string;
  // Extras
}