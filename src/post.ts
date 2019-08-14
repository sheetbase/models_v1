import {
  Ids, Status, Authors, Images, Content, Parents, Relationships, Taxonomies, Rating, Statistics, Extras,
} from './_shared';

export interface Post
extends Ids, Status, Authors, Images, Content,
Parents, Relationships, Taxonomies, Rating, Statistics, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  updatedAt?: string;
  // Authors
  // Images
  excerpt?: string;
  // Content
  slides?: {
    [slide: string]: Post;
  };
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