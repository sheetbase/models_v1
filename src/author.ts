import { Ids, Status, Images, Content, Taxonomies, Rating, Statistics, Extras } from './_shared';

export interface Author extends Ids, Status, Images, Content, Taxonomies, Rating, Statistics, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Images
  description?: string;
  // Content
  email?: string;
  phoneNumber?: number | string;
  url?: string;
  stats?: {
    [prop: string]: any;
  };
  locale?: string;
  origin?: string;
  // Taxonomies
  // Rating
  // Statistics
  keywords?: string;
  // Extras
}