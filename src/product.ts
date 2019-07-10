import { Ids, Images, Taxonomies, Statistics, Extras } from './_shared';
import { Post } from './post';

export interface ProductOption {
  title?: string;
  items: {
    [$key: string]: ProductOptionItem;
  };
}
export interface ProductOptionItem {
  id: string;
  title: string;
  value?: string;
  modifier?: number; // original price + this
}

export interface ProductVariant {
  title: string;
  sku: string;
  price?: number;
  upc?: string;
  image?: string;
  stockCount?: number;
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

export interface ProductShippingClass {
  title: string;
  est: string;
  logo?: string;
  cost?: number;
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
  discounted?: number;
  type?: string;
  brand?: string;
  birthday?: string;
  country?: string;
  upc?: number | string;
  props?: {
    weight?: number | string; // number = kg; 10lb
    dimensions?: string;
    [prop: string]: any;
  };
  status?: 'instock' | 'outstock' | 'archived';
  stockCount?: number;
  soldCount?: number;
  locale?: string;
  origin?: string;
  options?: {
    [name: string]: ProductOption;
  };
  variants?: {
    [variant: string]: ProductVariant;
  };
  shipping?: string | ProductShipping;
  rating?: ProductRating;
  parents?: {
    [$key: string]: any;
  };
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}