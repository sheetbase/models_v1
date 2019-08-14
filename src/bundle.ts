import {
  Ids, Authors, Images, Content, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Bundle
extends Ids, Authors, Images, Content, Relationships, Taxonomies, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  status?: string;
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
  // Statistics
  keywords?: string;
  // Extras
}
