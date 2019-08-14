import {
  Ids, Status, Authors, Images, Content, Relationships, Taxonomies, Rating, Statistics, Extras,
} from './_shared';

export interface Bundle
extends Ids, Status, Authors, Images, Content, Relationships, Taxonomies, Rating, Statistics, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  count?: number;
  locale?: string;
  origin?: string;
  // Relationships
  // Taxonomies
  // Rating
  // Statistics
  keywords?: string;
  // Extras
}
