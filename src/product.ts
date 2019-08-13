import { Ids, Authors, Images, Content, Taxonomies, Rating, Statistics, Extras } from './_shared';
import { Post } from './post';

export interface ProductOption {
  title?: string;
  items: {
    [$key: string]: ProductOptionItem;
  };
}

export interface ProductOptionItem {
  title: string;
  content?: any; // color code, ...
  offset?: number; // original price + this
}

export interface ProductVariant {
  title: string; // Product 1 (XL, Blue)
  sku: string; // product SKU + options ids: P001-XL-B (Product 1, XL, Blue)
  price?: number;
  discounted?: number;
  upc?: string;
  thumbnail?: string;
  image?: string;
  stockCount?: number;
}

export interface Product extends Ids, Authors, Images, Content, Taxonomies, Rating, Statistics, Extras {
  // Ids

  title: string;
  sku: string;
  unit: string;
  price: number;

  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  slideshow?: {
    [slide: string]: Post;
  };
  discounted?: number;
  type?: string;
  brand?: string;
  birthday?: string;
  country?: string;
  upc?: number | string;
  props?: {
    weight?: string; // number = kg; 10lb
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
  promotion?: string;
  warranty?: string;
  parents?: {
    [$key: string]: any;
  };
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Rating
  // Statistics
  // Extras
}