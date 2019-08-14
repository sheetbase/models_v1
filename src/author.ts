import { Ids, Images, Content, Taxonomies, Rating, Statistics, Extras } from './_shared';

export interface Author extends Ids, Images, Content, Taxonomies, Rating, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  status?: string;
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