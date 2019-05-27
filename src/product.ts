import { Ids, Images, Taxonomies, Statistics, Extras } from './_shared';
import { Post } from './post';

export interface ProductVariation {
  title?: string;
  items: {
    [$key: string]: ProductVariationItem;
  };
}

export interface ProductVariationItem {
  title: string;
  price?: number; // use this price
  modifier?: number; // original price + this
  description?: string;
  content?: string;
}

export interface ProductRating {
  count: number;
  total: number;
}

export interface ProductShipping {
  price?: number;
  weight?: number | string; // number = kg; 10lb
  dimensions?: string;
  class?: string;
}

export interface Product extends Ids, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  sku: string;
  unit: string;
  price: number;

  createdAt?: string;
  // Images
  description?: string;
  contentSource?: string;
  content?: string;
  slideshow?: Post[];
  parents?: {
    [$key: string]: any;
  };
  discounted?: number;
  type?: string;
  brand?: string;
  birthday?: string;
  country?: string;
  upc?: number | string;
  variations?: {
    [name: string]: ProductVariation;
  };
  rating?: ProductRating;
  shipping?: ProductShipping;
  status?: 'instock' | 'outstock' | 'archived';
  locale?: string;
  origin?: string;
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}