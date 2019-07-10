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
  cost?: number;
  class?: string; // default class
  only?: string | string[]; // only accept these classes
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
  shipping?: string | ProductShipping;
  status?: 'instock' | 'outstock' | 'archived';
  stockCount?: number;
  soldCount?: number;
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