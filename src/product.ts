import {
  Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Rating, Statistics, Extras,
} from './_shared';
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

export interface ProductVariant extends Images {
  title: string; // Product 1 (XL, Blue)
  sku: string; // product SKU + options ids: P001-XL-B (Product 1, XL, Blue)
  price?: number;
  discounted?: number;
  upc?: number | string;
  // Images
  stockCount?: number;
  soldCount?: number;
}

export interface Product
extends Ids, Authors, Images, Content, Parents, Relationships, Taxonomies, Rating, Statistics, Extras {
  // Ids
  title: string;
  type?: string;
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  slideshow?: {
    [slide: string]: Post;
  };
  sku: string;
  unit: string;
  price: number;
  discounted?: number;
  brand?: string;
  birthday?: number | string;
  country?: string;
  upc?: number | string;
  promotion?: string;
  warranty?: string;
  props?: {
    weight?: string;
    dimensions?: string;
    [prop: string]: any;
  };
  status?: 'instock' | 'outstock' | 'archived';
  stockCount?: number;
  soldCount?: number;
  options?: {
    [name: string]: ProductOption;
  };
  variants?: {
    [variant: string]: ProductVariant;
  };
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