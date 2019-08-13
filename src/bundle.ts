import {
  Ids, Authors, Images, Content, Relationships, Taxonomies, Statistics, Extras,
} from './_shared';

export interface Bundle
extends Ids, Authors, Images, Content, Relationships, Taxonomies, Statistics, Extras {
  // Ids

  title: string;

  count?: number;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  type?: string;
  // Relationships
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}
